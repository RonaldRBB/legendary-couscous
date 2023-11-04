import React from 'react';
class Modal extends React.Component {
    render() {
        return (
            <div id="sample-modal" className="modal">
                <div className="modal-background jb-modal-close" />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Confirm action</p>
                        <button className="delete jb-modal-close" aria-label="close" />
                    </header>
                    <section className="modal-card-body">
                        <p>
                            This will permanently delete <b>Some Object</b>
                        </p>
                        <p>This is sample modal</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button jb-modal-close">Cancel</button>
                        <button className="button is-danger jb-modal-close">Delete</button>
                    </footer>
                </div>
                <button className="modal-close is-large jb-modal-close" aria-label="close" />
            </div>
        );
    }
}
export default Modal