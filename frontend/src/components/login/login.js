import React from 'react';
import {Button, Divider, Form, Grid, Segment} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';

export default class LoginForm extends React.Component {
  
  state={
    redirect: false
  }
  
  setRedirect=() => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect=() => {
    if (this.state.redirect) {
      return <Redirect to='/blogs' />    
    }
}
  
  render() {

    return (
      <div>
        <center>
          
          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form onSubmit={this.setRedirect}>
                  <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                  />

                  <Button content='Login' primary onClick={this.setRedirect} />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Button content='Sign up' icon='signup' size='big' />
              </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </center>
      </div>

    );
  }
}
