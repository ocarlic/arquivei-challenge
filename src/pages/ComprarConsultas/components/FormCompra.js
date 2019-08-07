import React from 'react';
import PropTypes from 'prop-types';

const FormCompra = ({
  handleFormSubmit,
  handleQuantidadeInput,
  handleNumberCreditCard,
  handleNameCard,
  nameCard,
  quantidade,
  handleCNPJInput,
  cnpj,
  numberCreditCard,
  handleExpirationDate,
  expirationDate,
  handleNumberCVV,
  numberCVV,
  errorCNPJ,
  errorCreditCard,
}) => (
  <div className="col-md-8 order-md-1">
    <h4 className="mb-3">Quantidade de consultas</h4>
    <form className="needs-validation" onSubmit={handleFormSubmit} data-testid="form">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="Quantidade">
            Quantidade
            <input
              type="text"
              onChange={handleQuantidadeInput}
              value={quantidade}
              className="form-control"
              id="Quantidade"
              placeholder=""
              required
            />
          </label>
          <div className="invalid-feedback">A quantidade precisa ser valida</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="CNPJ">
            CNPJ
            <input
              type="text"
              onChange={handleCNPJInput}
              value={cnpj}
              className="form-control"
              id="CNPJ"
              placeholder=""
              required
            />
          </label>
          {errorCNPJ && <div className="alert alert-danger">O CNPJ precisa ter 14 digitos</div>}
        </div>
      </div>

      <h4 className="mb-3">Pagamento</h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-name">
            Nome do cartão
            <input
              type="text"
              onChange={handleNameCard}
              value={nameCard}
              className="form-control"
              id="cc-name"
              placeholder=""
              required
            />
            <small className="text-muted">Nome completo que contém no cartão</small>
            <div className="invalid-feedback">Informe o nome do cartão</div>
          </label>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-number">
            Número do cartão de crédito
            <input
              type="text"
              onChange={handleNumberCreditCard}
              value={numberCreditCard}
              className="form-control"
              id="cc-number"
              placeholder=""
              required
            />
          </label>
          {errorCreditCard && (
            <div className="alert alert-danger">Informe os 16 digitos do seu cartão</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-expiration">
            Data de validade
            <input
              type="text"
              onChange={handleExpirationDate}
              value={expirationDate}
              className="form-control"
              id="cc-expiration"
              placeholder=""
              required
            />
          </label>
          <div className="invalid-feedback">Data de validade precisa ser informada</div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-cvv">
            CVV
            <input
              type="text"
              onChange={handleNumberCVV}
              value={numberCVV}
              className="form-control"
              id="cc-cvv"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Security code required</div>
          </label>
        </div>
      </div>
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block mb-4" id="btnSubmit" type="submit">
        Finalizar a compra
      </button>
    </form>
  </div>
);

FormCompra.defaultProps = {
  handleFormSubmit: () => {},
  handleQuantidadeInput: () => {},
  quantidade: '0',
  handleCNPJInput: () => {},
  cnpj: '',
  handleNameCard: () => {},
  nameCard: '',
  handleNumberCreditCard: () => {},
  numberCreditCard: '',
  handleExpirationDate: () => {},
  expirationDate: '',
  handleNumberCVV: () => {},
  numberCVV: '',
  errorCNPJ: false,
  errorCreditCard: false,
};

FormCompra.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleQuantidadeInput: PropTypes.func,
  quantidade: PropTypes.string,
  handleCNPJInput: PropTypes.func,
  cnpj: PropTypes.string,
  handleNameCard: PropTypes.func,
  nameCard: PropTypes.string,
  handleNumberCreditCard: PropTypes.func,
  numberCreditCard: PropTypes.string,
  handleExpirationDate: PropTypes.func,
  expirationDate: PropTypes.string,
  handleNumberCVV: PropTypes.func,
  numberCVV: PropTypes.string,
  errorCNPJ: PropTypes.bool,
  errorCreditCard: PropTypes.bool,
};

export { FormCompra };
