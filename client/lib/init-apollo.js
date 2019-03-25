import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import Router from 'next/dist/client/router';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
	global.fetch = fetch;
}

function create(initialState){
	const wsLink = process.browser
		? new WebSocketLink({
				uri: 'ws://localhost:8080/v1alpha1/graphql',
				options: {
					reconnect: true,
				}
			})
		: null;

	const httpLink = new HttpLink({
		uri: 'http://localhost:8080/v1alpha1/graphql'
	});

	const link = process.browser
		? split(
				// split based on operation type
				({ query }) => {
					const { kind, operation } = getMainDefinition(query);
					return kind === 'OperationDefinition' && operation === 'subscription';
				},
				wsLink,
				httpLink
			)
		: httpLink;

	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
		link: link,
		cache: new InMemoryCache().restore(initialState || {})
	});
}

export default function initApollo(initialState){
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState);
	}

	return apolloClient;
}
