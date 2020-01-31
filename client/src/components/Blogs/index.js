import React from 'react';
import { Card, Container, Divider } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class Blogs extends React.Component {

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to = '/?id=1' / >
        }
    }

    render() {
        return (
            <div>
                <Divider />
            <Container  >
                {this.renderRedirect()}            
                <Card
                    onClick = {this.setRedirect}
                    header='<Agriculture.h>'
                    meta='Blog'
                    description='Modernizing Agricultural Business to a Great Standard is a Great Deal'
                    />
                <Card
                    onClick = {this.setRedirect}
                    header='<Agriculture.h>'
                    meta='Blog'
                    description='Modernizing Agricultural Business to a Great Standard is a Great Deal'
                    />
                <Card
                    onClick = {this.setRedirect}
                    header='<Agriculture.h>'
                    meta='Blog'
                    description='Modernizing Agricultural Business to a Great Standard is a Great Deal'
                    />
                <Card
                    onClick = {this.setRedirect}
                    header='<Agriculture.h>'
                    meta='Blog'
                    description='Modernizing Agricultural Business to a Great Standard is a Great Deal'
                />
            </Container>   
            </div>
        );                
    }
}
        
export default Blogs;