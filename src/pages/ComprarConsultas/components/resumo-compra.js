import React from 'react';
import PropTypes from 'prop-types';

const Resumo = ({ quantidade, valueTotal }) => (
  <div className="col-md-4 order-md-2 mb-4">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Resumo da compra</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Promoção 1</h6>
          <small className="text-muted">Preço das primeiras 1000 consultas</small>
        </div>
        <span className="text-muted">R$ 0,09</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Promoção 2</h6>
          <small className="text-muted">Preço das 1001 até 2000 consultas</small>
        </div>
        <span className="text-muted">R$ 0,16</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Preço da consulta</h6>
          <small className="text-muted">Preço normal das consultas fora de promoção</small>
        </div>
        <span className="text-muted">R$ 0,24</span>
      </li>
      <li className="list-group-item d-flex justify-content-between bg-light lh-condensed">
        <div>
          <h6 className="my-0">Quantidade de consultas</h6>
          <small className="text-muted">Número da quantidade que você escolheu</small>
        </div>
        <span className="text-muted">{quantidade}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total</span>
        <strong>{`R$ ${valueTotal}`}</strong>
      </li>
    </ul>
  </div>
);

Resumo.defaultProps = {
  quantidade: '',
  valueTotal: '',
};

Resumo.propTypes = {
  quantidade: PropTypes.string,
  valueTotal: PropTypes.string,
};

export default Resumo;
