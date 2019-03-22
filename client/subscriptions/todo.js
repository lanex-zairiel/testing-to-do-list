import gql from 'graphql-tag';

/**
 * Get the list of todos
 * 
 * @returns todos
 */
export const SUBSCRIPTION_TODOS = gql`
	subscription Todos {
		todos(order_by: { id: asc }) {
			id
			todo
		}
	}
`;