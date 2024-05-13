import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormModal from './FormModal';

function PopupModal({show, handleClose, initialValues, fields, holders, handleUpdate, onFetch}) {
  
  const closeModal = async () => {
    await fetch()
    return handleClose
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FormModal initialValues={initialValues} fields={fields} holders={holders} handleUpdate={handleUpdate} onFetch={onFetch}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupModal