import {useEffect, useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom'
import {Button, Modal, Toast} from "react-bootstrap";

const SuperPortalModal = ({open, onClose}) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <div>
            <Toast className={'position-absolute bottom-0 end-0 m-4'} delay={3000} onClose={onClose} show={open} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>,
        document.getElementById('portal')
    );
};

export default SuperPortalModal;