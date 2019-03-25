import React, { useEffect } from "react";
import { Button, Divider, Loader, Segment, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { SUBSCRIPTION_TODOS } from '../subscriptions/todo'
import { Subscription, withApollo } from 'react-apollo';
import { MUTATION_DELETE_TODOS, MUTATION_UPDATE_TODOS } from '../mutations/todo';
import { useState } from 'react';

const list = (props) => {

  const [data, setData] = useState();
  const [todoWithProps, setTodoWithProps] = useState([]);

  useEffect(() => {
    if (data) {
      let todos = JSON.parse(JSON.stringify(data));
      todos.forEach(todo => {
        todo.inputProp = {
          transparent: true,
          disabled: true,
        }
        todo.buttonProp = {
          icon: 'edit',
          color: 'blue'
        }
      });

      setTodoWithProps(todos)
    }
  }, [ data ] );

  const { client: { mutate } } = props;

	const updateTodo = async (todo) => {
    console.log(todo.todo)
    const { data } = await mutate({
      mutation: MUTATION_UPDATE_TODOS,
      variables: {
        id: todo.id,
        todo: {
          todo: todo.todo,
        }
      }
    });
  }

	const deleteTodo = async (id) => {
    const { data } = await mutate({
      mutation: MUTATION_DELETE_TODOS,
      variables: {
        id
      }
    });
  }
  
  const editTodo = async (id) => {
    const todos = JSON.parse(JSON.stringify(todoWithProps));
    const todo = todos.find(todo => todo.id === id);
    if (todo.buttonProp.icon === 'edit') {
      todo.inputProp = {
        transparent: false,
        disabled: false
      }
      todo.buttonProp = {
        icon: 'add',
        color: 'green'
      }
      setTodoWithProps(todos);
    } else {
      updateTodo(todo);
    }
	}

  const handleChange = (e, id) => {
    const todos = JSON.parse(JSON.stringify(todoWithProps));
    const todo = todos.find(todo => todo.id === id);
    todo.todo = e.target.value;
    setTodoWithProps(todos);
  }

  return (
    <Subscription subscription={SUBSCRIPTION_TODOS}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loader inverted>Loading</Loader>;
        }
        
        if (data) {
          setData(data.todos);

          return (
            <div>
              <Divider />
              <Segment.Group piled>
                {todoWithProps.map(todo => (
                  <Segment key={todo.id}>
                    <Input {...todo.inputProp} defaultValue={todo.todo} onChange={(event) => handleChange(event, todo.id)}></Input>
                    <Button circular color="red" icon='delete' floated="right" size="mini" onClick={() => (deleteTodo(todo.id))}></Button>
                    <Button  {...todo.buttonProp} circular floated="right" size="mini" onClick={() => (editTodo(todo.id))}></Button>
                  </Segment>
                ))}
              </Segment.Group>
            </div>
          );
        }
      }}
    </Subscription>
  )
}

export default withApollo(list);