import React, { PureComponent } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
  state = {
    inputEmail: '',
    inputPassword: '',
    email: '',
    password: '',
    logged: false,
    errorLogin: false,
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://5d447aabd823c30014771837.mockapi.io/api/v1/login',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      const result = res.data;
      if (
        localStorage.getItem('email') === result.email
        && localStorage.getItem('password') === result.password
      ) {
        this.setState({ logged: true });
      }
      this.setState({ email: result.email, password: result.password });
    });
  }

  handleChange = (type, e) => {
    this.setState({ [type]: e.target.value });
  };

  handleLogged = () => {
    const {
      email, password, inputEmail, inputPassword,
    } = this.state;
    if (email === inputEmail && password === inputPassword) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      this.setState({ logged: true });
    } else this.setState({ errorLogin: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleLogged();
  };

  render() {
    const {
      logged, inputEmail, inputPassword, errorLogin,
    } = this.state;
    return (
      <div className="text-center loginForm">
        <form className="form-signin" onSubmit={e => this.handleSubmit(e)} data-testid="form">
          <img
            src="https://cdn-landing.arquivei.com.br/wp-content/themes/pure-arquivei/img/logo-white-small.png?x15117"
            alt="Arquivei.com.br"
            style={{ marginBottom: 20 }}
          />
          <input
            type="email"
            id="inputEmail"
            value={inputEmail}
            onChange={e => this.handleChange('inputEmail', e)}
            className="form-control"
            placeholder="Digite seu e-mail"
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            value={inputPassword}
            onChange={e => this.handleChange('inputPassword', e)}
            placeholder="Digite sua senha"
            required
          />
          <div className="checkbox mb-3" />
          {errorLogin && (
            <div className="alert alert-danger" role="alert">
              Informe seu login corretamente
            </div>
          )}
          <button className="btn btn-lg btn-primary btn-block" id="btnSubmit" type="submit">
            Entrar
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2014-2019</p>
        </form>
        {logged ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

export { Login };
