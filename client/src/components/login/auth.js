import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'abhik1698.auth0.com',
    clientID: 'xeXfXZogfa0sRlBzuU7oRMvEtoF92M6Y',
    redirectUri: 'http://localhost:3000/afterlogin',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  login = () => {
    this.auth0.authorize();
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult){
        localStorage.setItem('access_token', authResult.access_token);
        localStorage.setItem('id_token', authResult.id_token);

        let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));
        localStorage.setItem('expiresAt', expiresAt);
      } else {
        console.log(err);
      }
    });
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiresAt');
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt;
  }
}
