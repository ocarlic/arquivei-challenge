import React from 'react';

import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirm = ({
  quantidade,
  valueTotal,
  handleClose,
  showModal,
  handleConfirmBuy,
  nameCard,
}) => (
  <Modal centered show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Finalizando a compra</Modal.Title>
    </Modal.Header>
    <Modal.Body>{`Olá ${nameCard},`}</Modal.Body>
    <Modal.Body>{`Você realmente deseja comprar ${quantidade} consultas por R$ ${valueTotal}?`}</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleConfirmBuy}>
        SIM
      </Button>
    </Modal.Footer>
  </Modal>
);

ModalConfirm.defaultProps = {
  quantidade: '',
  valueTotal: '',
  nameCard: '',
  handleClose: () => {},
  showModal: '',
  handleConfirmBuy: () => {},
};

ModalConfirm.propTypes = {
  quantidade: PropTypes.string,
  valueTotal: PropTypes.string,
  nameCard: PropTypes.string,
  handleClose: PropTypes.func,
  showModal: PropTypes.bool,
  handleConfirmBuy: PropTypes.func,
};

export default ModalConfirm;
