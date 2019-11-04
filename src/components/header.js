import React, {Component} from 'react';
import { Layout, Menu, Icon} from 'antd';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {

  render(){
    return (
      <div className="header">
        <Layout className="layout">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" className="brand"><Link to='/'><h3>Parameter</h3></Link></Menu.Item>
            <Menu.Item key="2" ><Link to='/'><Icon type="home" />Home</Link></Menu.Item>
            <Menu.Item key="3" ><Link to='/Blogs'><Icon type="info-circle" />Blogs</Link></Menu.Item>
            <Menu.Item key="3" ><Link to='/login'><Icon type="login" />Login</Link></Menu.Item>
          </Menu>
        </Layout>
      </div>
    );
  }
}
