
import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment inverted>
        <Menu inverted pointing secondary>

            <Menu.Item as={Link}
              name='home'
              to='/'
              active={activeItem==='home'}
              onClick={this.handleItemClick}
            ><Icon name='home' />Home
            </Menu.Item>

            <Menu.Item as={Link}
              name='blogs'
              to='/blogs'
              active={activeItem==='blogs'}
              onClick={this.handleItemClick}
            ><Icon loading name='certificate' />
              Blogs
            </Menu.Item>

          <Menu.Item as={Link}
              name='login'
              to='/login'
              active={activeItem==='login'}
              onClick={this.handleItemClick}
            ><Icon name='user' />Login
            </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>

          </Menu.Menu>
        </Menu>
          {/* <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
          <h1 style={{color: 'white'}}>(Para, Commerce)</h1>
        </Segment>
      </div>
    )
  }
}