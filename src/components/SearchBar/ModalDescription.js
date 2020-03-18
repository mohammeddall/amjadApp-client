import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

class ModalDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true
        }
    }

    render() {
        const service = this.props.modalDetails.service;
        return (
            <Modal open={this.state.modalOpen ? this.props.modalDetails.defaultOpen : this.state.modalOpen}
                onClose={() => this.props.onModalClose()}>
                <Modal.Header>Selected a service</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>{service.name}</Header>
                        <p>
                            <span style={{ fontSize: '120%', fontWeight: 'bolder' }}>Age: </span>
                            {` from ${service.fromAge} To ${service.toAge}`}
                        </p>
                        <p>
                            <span style={{ fontSize: '120%', fontWeight: 'bolder' }}>Functionality: </span>
                            {`${service.functionality} `}
                        </p>
                        <p>
                            <span style={{ fontSize: '120%', fontWeight: 'bolder' }}>Isability: </span>
                            {`${service.isability} `}
                        </p>
                        <p>
                            <span style={{ fontSize: '120%', fontWeight: 'bolder' }}>Description: </span>
                            {`${service.description} `}
                        </p>


                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}


export default ModalDescription