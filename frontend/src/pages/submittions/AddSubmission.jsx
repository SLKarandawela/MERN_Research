import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Card,
  ListGroup,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import "../../static/uploadAnswer.css";
const AddSubmission = () => {
    const location = useLocation();
    
  return (
    <div>
      <AcademicNav></AcademicNav>
      <br />
      <h5 className="titleClass">Upload your answer</h5>
      <br />
      <Container>
        <Card>
          <ListGroup as="ol">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Title</div>
              </div>
              <Badge bg="primary" pill>
                {location.state.title}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Due Date</div>
              
              </div>
              <Badge bg="warning text-dark" pill>
                {location.state.dueDate}
              </Badge>
            </ListGroup.Item>
           
          </ListGroup>
        </Card>

        <br />
        
          
            <Form.Group controlId="formFileLg" className="mb-3">
              
              <Form.Control type="file" size="lg" id="upload_assignment_btn"/>
            </Form.Group>
          
       

        <div className="center_wrapper">
          <Button variant="success" className="globalButton">
            Save Changes
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AddSubmission;
