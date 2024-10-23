import './Modal.scss';
import React, { Component } from 'react';

export interface ModalPropsI {
    title: string | React.ReactNode;
    show: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export interface ModalStateI {}

class Modal extends Component<ModalPropsI, ModalStateI> {
    render() {
        const { title, show, onClose, children } = this.props;

        if (!show) return null;

        return (
            <div className="modal" onClick={onClose}>
                <div className="content" onClick={(e) => e.stopPropagation()}>
                    <div className="top-bar">
                        <label>{title}</label>

                        <button className="close-button" onClick={onClose}>
                            <div className="material-symbols-outlined icon">
                                Close
                            </div>
                        </button>
                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        );
    }
}

export default Modal;
