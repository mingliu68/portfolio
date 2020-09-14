import React, { useState } from 'react';
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

const styles = {
    modalContainer: {
        top: 0,
        left: 0,
        width: "100%",
        height: "calc(100% + 10px)"
    },
    modalBackground: {
        backgroundColor: "#ccc"
    }
}