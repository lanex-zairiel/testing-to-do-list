import gql from 'graphql-tag';

/**
 * Create todo
 * @param {array} todo todos_insert_input
 * @returns insert_todos: { returning: { id } }
 */
export const MUTATION_CREATE_TODOS = gql`
    mutation CreateTodos($todo: [todos_insert_input!]!) {
        insert_todos(objects: $todo) {
            returning {
                id
            }
        }
    }
`;

/**
 * Update todo
 * @param {array} todo todos_set_input
 * @returns update_todos: { returning: { id } }
 */
export const MUTATION_UPDATE_TODOS = gql`
    mutation UpdateTodos($id: Int!, $todo: todos_set_input) {
        update_todos(where: { id: { _eq: $id } }, _set: $todo) {
            returning {
                id
                todo
            }
        }
    }
`;

/**
 * Delete todo
 */
export const MUTATION_DELETE_TODOS = gql`
mutation DeleteTodos($id: Int) {
    delete_todos (where: { id: { _eq: $id } }) {
        returning {
            id
        }
    }
}
`;
