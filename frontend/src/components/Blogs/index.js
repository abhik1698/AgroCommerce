import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Blogs extends React.Component {
 
    render() {
        return (
            <BrowserRouter>
            <div className="BlogIndex">              
                <Switch>
                    <h1>Hi</h1>
                <Route path='/' exact component={Blogs} />
                <Route path='/blogs' exact component={Blogs} />                
                </Switch>
            </div>
          </BrowserRouter>              
      );
  }
}

export default Blogs;
