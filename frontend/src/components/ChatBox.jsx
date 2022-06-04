import React from "react";
import { Form,Container,Row,Col, Button } from "react-bootstrap";

const ChatBox = () => {
  return (
      <div>
          <Container className='chatBox'>
              <Row>
                  <Col md={10}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} />
              </Form.Group>
                  </Col>
                  <Col md={2} className='sendBtnCol'>
                      <Button><i class="fa-solid fa-paper-plane"></i> Send</Button>
                  </Col>
              </Row>
      
              </Container>
    </div>
  );
};

export default ChatBox;
