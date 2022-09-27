import './App.css';
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return (
      <>
        <div className='principal'>
          <div className='secondary'>
            <Button color='success' onClick={this.abrirModal}>Mostar Modal</Button>
          </div></div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Bienvenido
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='usuario'>Usuario:</Label>
              <Input type='email' id='usuario' />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Contraseña:</Label>
              <Input type='password' id='password' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>Inciar Sesión</Button>
            <Button color='danger' onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default App;
