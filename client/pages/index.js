import React from "react";
import { Grid, Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Main from '../pages/layout/main'
import TodoList from './list'
import TodoAdd from './add'

export default () => 
  (
    <Main>
      <TodoAdd />
      <TodoList />
    </Main>
  )