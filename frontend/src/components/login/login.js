import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import WrappedRegistrationForm from './register.js';
import { Redirect } from 'react-router-dom';

class NormalLoginForm extends React.Component {
  
  state={
    login: false,
    redirect: false,
    tryAgain: false
  }
  
  setRedirect=() => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect=() => {
    if (this.state.redirect) {
      return <Redirect to='/Blogs' />    
    }
}
  
  handleSubmit=e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.username === "root" && values.password === "root") {
          console.log("Successs"); 
          this.props.setState({login: true});
          console.log(this.state.login); 
        } else {
          console.log( "Failed" );
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <center>
          <h1>(Para, Commerce)</h1>
          <Row>
            {/* Register form */}
            <Col span={12}>
              <div id="reg-form">
                <h2>Create account</h2>
                <WrappedRegistrationForm />
              </div>
            </Col>

            {/* Login form */}
            <Col span={12}>
              <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <h2>Login</h2>
                  <Form.Item>
                    {getFieldDecorator("username", {
                      rules: [{ required: true, message: "Username required" }]
                    })(
                      <Input
                        prefix={
                          <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        placeholder="Username"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [{ required: true, message: "Password required" }]
                    })(
                      <Input
                        prefix={
                          <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true,
                      message: "Invalid Credentials"
                    })(<Checkbox>Remember me</Checkbox>)}
                    {this.renderRedirect()}
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={this.setRedirect}
                      // onClick={()=> this.props.auth.login()}
                    >
                      Log in
                    </Button>
                    <br />
                    <a className="login-form-forgot" href="./">
                      Forgot password
                      <Icon type="question" />
                    </a>
                    &nbsp;|{" "}
                    <a href="#reg-form">
                      Register now
                      <Icon type="vertical-align-bottom" />
                    </a>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </center>
      </div>

    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;
