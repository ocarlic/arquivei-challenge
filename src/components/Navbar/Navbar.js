import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ Loggout }) => (
  <nav
    className="navbar navbar-dark fixed-top flex-md-nowrap"
    style={{ backgroundColor: '#4076FA' }}
  >
    <a className="col-sm-3 col-md-2 mr-0" href="/home">
      <img
        src="https://cdn-landing.arquivei.com.br/wp-content/themes/pure-arquivei/img/logo-white-small.png?x15117"
        alt="Download automático Notas Fiscais Eletrônicas (XML e DANFe), armazenamento ilimitado e gestão de NFe, CTe e NFSe. Teste grátis por 45 dias e baixe já suas notas!"
        style={{ height: 30 }}
      />
    </a>
    <ul className="navbar-nav px-3">
      <div
        className="nav-item text-nowrap"
        onClick={Loggout}
        onKeyPress={Loggout}
        role="button"
        tabIndex="0"
      >
        <a className="nav-link" href="/login">
          Sair
        </a>
      </div>
    </ul>
  </nav>
);

NavBar.propTypes = {
  Loggout: PropTypes.func.isRequired,
};

export default NavBar;
