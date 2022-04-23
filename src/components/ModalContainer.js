import React from 'react';
import ModalMe from './ModalMe';
import ModalContact from './ModalContact';
import ModalFolder from './ModalFolder';
import ModalDisk from './ModalDisk';
import ModalServiceNow from './ModalServiceNow';

const ModalContainer = () => {
    return (
        <div className="modal-container">
            <ModalDisk />
            <ModalContact />
            <ModalFolder />
            <ModalMe />
            <ModalServiceNow />
        </div>
    )
}

export default ModalContainer;

