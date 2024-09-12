import React, { useState, useEffect } from 'react';
import { getContact, deleteContact, updateContact } from '../service/allApi';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Listco({ contact,response }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactlist, setContactlist] = useState([]);

  useEffect(() => {
    getData();
  }, [response]);

  const getData = async () => {
    try {
      const res = await getContact();
      if (res.status === 200) {
        setContactlist(res.data);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error("Error fetching contacts");
    }
  };

  const delContact = async (id) => {
    try {
      const result = await deleteContact(id);
      if (result.status === 200) {
        getData();
        toast.success("Contact Deleted");
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error("Error deleting contact");
    }
  };

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setShowEditModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      if (selectedContact) {
        const result = await updateContact(selectedContact.id, selectedContact);
        if (result.status === 200) {
          getData();
          setShowEditModal(false);
          toast.success("Contact updated");
        } else {
          toast.error("Error updating contact");
        }
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      toast.error("An error occurred while updating the contact.");
    }
  };
 const dragHandler=(e)=>{
  console.log(e);
  console.log(contact);
  
  
 }
  return (
    <>
      <div className="p-3 mt-5 bg-dark mb-5">
        <h2 className="text-center p-1 text-light">All Contacts</h2>
        {contactlist.length > 0 ? (
          <Row>
            {contactlist.map((item) => (
              <Col md={4} className="mb-4" key={item.id}>
                <Card className="text-black" onDrag={(e)=>{dragHandler(e)}} draggable>
                  <Card.Body>
                    <Card.Text>Sl.No: {item.slno}</Card.Text>
                    <Card.Title>Name: {item.name}</Card.Title>
                    <Card.Text>Phone No: {item.phoneno}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <button className='btn' onClick={() => handleEditClick(item)}>
                        <i className="fa-solid fa-user-pen fs-4" style={{ color: "#515053" }} />
                      </button>
                      <button
                        className="btn "
                        
                        onClick={() => delContact(item?.id)}
                      >
                        <i className="fa-solid fa-trash fs-6" style={{ color: "#fe0606" }} />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h2 className="text-light">No contact available</h2>
        )}
</div>


      {selectedContact && (
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <div className="mb-3">
                <label htmlFor="number" className="form-label">Sl.No</label>
                <input
                  type="number"
                  className="form-control"
                  name="slno"
                  value={selectedContact.slno}
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={selectedContact.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneno" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneno"
                  value={selectedContact.phoneno}
                  onChange={handleFormChange}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Listco;
