import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

function Expences(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         INCOME AMOUNT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>date</Form.Label>
        <Form.Control type="date" placeholder="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Description</Form.Label>
        <Form.Control type="text" placeholder="description" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>select </option>
      <option value="1">personal</option>
      <option value="2">office</option>
    </Form.Select>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick>
            Close
          </Button>
          <Button variant="primary" onClick>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
export default Expences;

