import React from 'react';
import ModalMe from './ModalMe';
import ModalContact from './ModalContact';
import ModalFolder from './ModalFolder';
import ModalDisk from './ModalDisk';

const ModalContainer = () => {
    return (
        <div className="modal-container">
            <ModalDisk />
            <ModalContact />
            <ModalFolder />
            <ModalMe />
        </div>
    )
}

export default ModalContainer;