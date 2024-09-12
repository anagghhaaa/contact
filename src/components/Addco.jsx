import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../service/allApi';
import { toast } from 'react-toastify';

function Addco({res}) {

    const [contact, setContact] = useState({
        slno: "", name: "", phoneno: ""
    })
    const handleAdd = async () => {
        console.log(contact);
        const { slno, name, phoneno } = contact
        if (!slno || !name || !phoneno) {
            toast.warning('enter valid input')
        }
        else {
            const result = await addContact(contact)
            console.log(result);
            if (result.status == 201) {
                toast.success("Contact Added")
                handleClose()
                setContact({
                    slno: "", name: "", phoneno: ""
                })
                res(result)
            }
            else {
                toast.error("Adding Failed")
            }


        }

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-grid pt-5 '>
                <button className='btn btn-info' onClick={handleShow}>Add Contacts </button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingnumber" label="Sl.No:" className="mb-3">

                        <Form.Control type="number" placeholder="Sl.No:" onChange={(e) => { setContact({ ...contact, slno: e.target.value }) }} />

                    </FloatingLabel>
                    <FloatingLabel controlId="floatinginput" label="Name" className="mb-3">

                        <Form.Control type="text" placeholder="Enter Your Name" onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} />

                    </FloatingLabel>
                    <FloatingLabel controlId="floatingnumber" label=" Phone Number">

                        <Form.Control type="number" placeholder="Enter Your Phone No:" onChange={(e) => { setContact({ ...contact, phoneno: e.target.value }) }} />

                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleAdd}>ADD</Button>
                </Modal.Footer>
            </Modal>
             
           
        </>
    )
}

export default Addco