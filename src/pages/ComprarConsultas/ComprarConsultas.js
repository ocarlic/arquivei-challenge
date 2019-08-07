import React, { PureComponent } from 'react';
import Resumo from './components/resumo-compra';
import { FormCompra } from './components/FormCompra';
import { Mask } from '../../mask';
import { CalcularTotal } from '../../service/CalcularTotal';
import Modal from '../../components/Modal/Modal';
import SucessBuy from '../../components/SucessBuy/SucessBuy';

class ComprarConsultas extends PureComponent {
  state = {
    quantidade: '',
    cnpj: '',
    nameCard: '',
    numberCreditCard: '',
    expirationDate: '',
    numberCVV: '',
    valueTotal: '',
    showModal: false,
    confirmBuy: false,
    errorCNPJ: false,
    errorCreditCard: false,
  };

  handleQuantidadeInput = (e) => {
    const qnt = Mask.toN(e.target.value);
    if (qnt > 0) {
      this.setState({ quantidade: qnt });
      this.handleCalcular(qnt);
    } else if (qnt.length === 0) {
      this.setState({ quantidade: '' });
      this.handleCalcular(0);
    }
  };

  handleCalcular = (value) => {
    const total = CalcularTotal(value);
    this.setState({ valueTotal: total });
  };

  handleCNPJInput = (e) => {
    const { cnpj } = this.state;
    this.setState({ cnpj: Mask.toCNPJ(e.target.value) });
    if (cnpj.length === 18) {
      this.setState({ errorCNPJ: false });
    }
  };

  handleNameCard = (e) => {
    this.setState({ nameCard: e.target.value });
  };

  handleNumberCreditCard = (e) => {
    const { numberCreditCard } = this.state;
    this.setState({ numberCreditCard: Mask.toCreditCard(e.target.value) });
    if (numberCreditCard.length === 19) {
      this.setState({ errorCreditCard: false });
    }
  };

  handleExpirationDate = (e) => {
    this.setState({ expirationDate: Mask.toExpiration(e.target.value) });
  };

  handleNumberCVV = (e) => {
    this.setState({ numberCVV: Mask.toCVV(e.target.value) });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleConfirmBuy = () => {
    const { confirmBuy } = this.state;
    this.setState(
      {
        confirmBuy: true,
        showModal: false,
        quantidade: '',
        cnpj: '',
        nameCard: '',
        numberCreditCard: '',
        expirationDate: '',
        numberCVV: '',
        valueTotal: '',
      },
      () => {
        setTimeout(() => {
          this.setState({
            confirmBuy: false,
          });
        }, 9000);
      },
    );
    return confirmBuy;
  };

  handleBackPage = () => {
    this.setState({
      confirmBuy: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { cnpj, numberCreditCard } = this.state;
    if (cnpj.length === 18 && numberCreditCard.length === 19) {
      this.setState({ showModal: true, errorCNPJ: false, errorCreditCard: false });
    } else if (cnpj.length !== 18 || numberCreditCard.length !== 19) {
      if (cnpj.length !== 18) this.setState({ errorCNPJ: true });
      else this.setState({ errorCNPJ: false });

      if (numberCreditCard.length !== 19) this.setState({ errorCreditCard: true });
      else this.setState({ errorCreditCard: false });
    }
  };

  render() {
    const { confirmBuy } = this.state;
    return (
      <>
        {confirmBuy && (
          <SucessBuy
            text="COMPRA REALIZADA COM SUCESSO!"
            handleBackPage={() => this.handleBackPage()}
          />
        )}
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Comprar Consultas</h1>
        </div>
        <div className="row">
          <Resumo {...this.state} />
          <FormCompra
            handleFormSubmit={e => this.handleFormSubmit(e)}
            handleQuantidadeInput={e => this.handleQuantidadeInput(e)}
            handleCNPJInput={e => this.handleCNPJInput(e)}
            handleNameCard={e => this.handleNameCard(e)}
            handleNumberCreditCard={e => this.handleNumberCreditCard(e)}
            handleExpirationDate={e => this.handleExpirationDate(e)}
            handleNumberCVV={e => this.handleNumberCVV(e)}
            handleBackPage={() => this.handleBackPage()}
            {...this.state}
          />
          <Modal
            {...this.state}
            handleClose={() => this.handleClose()}
            handleConfirmBuy={() => this.handleConfirmBuy()}
          />
        </div>
      </>
    );
  }
}

export default ComprarConsultas;
