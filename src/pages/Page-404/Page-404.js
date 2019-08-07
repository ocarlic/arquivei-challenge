import React from 'react';

const PageNotFound = () => (
  <div className="PageNotFound">
    <div className="jumbotron">
      <h1 className="display-4">Ops!</h1>
      <p className="lead">A página que você está procurando não foi encontrada</p>
      <hr className="my-4" />

      <a className="btn btn-primary btn-lg" href="/home" role="button">
        Voltar para home
      </a>
    </div>
  </div>
);

export default PageNotFound;
