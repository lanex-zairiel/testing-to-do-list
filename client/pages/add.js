import React from "react";
import { Grid, Button, Input } from 'semantic-ui-react'
import { withApollo } from "react-apollo";
import { MUTATION_CREATE_TODOS } from '../mutations/todo'
import { useState } from 'react';

const add = (props) => {

  const [ todo, setTodo ] = useState();
  const { client : { mutate } } = props;

	const addTodo = async () => {
    const { data} = await mutate({
      mutation: MUTATION_CREATE_TODOS,
      variables: {
        todo: [
          {
            todo,
          }
        ]
      }
    });
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  return  (
    <Grid centered columns={1}>
      <Grid.Column textAlign='center'>
        <Input size='huge' placeholder='Add a todo' onChange={handleChange}/>
        <Button size='huge' icon='add' color='black' onClick={addTodo}></Button>
      </Grid.Column>
    </Grid>
  )
}

export default withApollo(add);