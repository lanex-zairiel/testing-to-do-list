import React from 'react'
import Router, { withRouter } from 'next/router';
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

const Main = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Todo App
        </Menu.Item>
        <Menu.Item as='a' onClick={() => Router.push('/')}>Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      {/* <Header as='h1'>Todos of the day</Header> */}

      { props.children }
    </Container>
  </div>
)

export default withRouter(Main);