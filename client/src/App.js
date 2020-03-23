import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Index from "./components/Home";

import store from "./store";
import { Provider } from "react-redux";

import LoginForm from "./components/Login/login.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/Login/auth.js";
import AfterLogin from "./components/Login/afterLogin.js";

import Particles from "react-particles-js";
import Blogs from "./components/Blogs/index.js";

const auth = new Auth();
const handleAuthentication = props => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />

          <Provider store={store}>
            <Route path="/blogs" exact component={Blogs} />
          </Provider>

          <Route path="/login" exact render={() => <LoginForm auth={auth} />} />
          <Route
            path="/afterlogin"
            exact
            render={props => {
              handleAuthentication(props);
              return <AfterLogin />;
            }}
          />
        </Switch>
        <Particles params={particlesJson} />
      </div>
    </BrowserRouter>
  );
}

export default App;

const particlesJson = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#ff9800"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 2,
        color: "#ff9800"
      },
      polygon: {
        nb_sides: 6
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 10,
      random: true
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ff5722",
      opacity: 0.3,
      width: 2
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "bubble"]
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.7
        }
      },
      bubble: {
        distance: 600,
        size: 12,
        duration: 1,
        opacity: 0.8,
        speed: 2
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 20
      },
      remove: {
        particles_nb: 10
      }
    }
  },
  retina_detect: true
};
