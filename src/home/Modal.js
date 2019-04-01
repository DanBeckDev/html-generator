import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default function AddModal () {
    const [ modalState, setModalState ] = useState(false);

    return (
        <>
        <div className="dt-ns dt--fixed-ns w-100">
            <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                <h2 className="fw4 blue mt0 mb3">Welcome to HTML Generator!</h2>
                <p className="black-70 measure lh-copy mv0">
                    Click the add section Button to begin.
                </p>
                </div>
            </div>
            <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#0" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" onClick={() => setModalState(true)}>Add Section</a>
            </div>
        </div>
        <Modal show={modalState} onHide={() => setModalState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalState(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setModalState(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}