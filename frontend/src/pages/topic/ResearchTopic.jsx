import React from 'react'
import { Container, Form, Button, Row, Col,Card } from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import "../../static/uploadAnswer.css";
const ResearchTopic = () => {
  return (
      <div>
                  <AcademicNav></AcademicNav>
      <br />

      <h5 className="titleClass">Create Research Group Topic</h5>
      <Container>
        <Row>
          <Col>
            <Form id="createSubmissionForm">
              

              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Group Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Group name"
              // value={subTitle}
              // onChange={(e) => {
              //   setSubTitle(e.target.value);
              // }}
            />
              </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Research Group Topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              // value={subTitle}
              // onChange={(e) => {
              //   setSubTitle(e.target.value);
              // }}
            />
              </Form.Group>

              
              
              

          

          

          <div className="center_wrapper">
            <Row>
              <Col md>
                <Button
                  variant="danger"
                  className="globalCancelButton"
                  // onClick={(e) => {
                  //   addSubmissionFunc(e);
                  // }}
                >
                  <i class="fa-solid fa-xmark"></i> Cancel
                </Button>
              </Col>
              <Col md>
                <Button
                  variant="success"
                  className="globalButton"
                  // onClick={(e) => {
                  //   addSubmissionFunc(e);
                  // }}
                >
                  <i class="fa-solid fa-check"></i> Create Topic
                </Button>
              </Col>
            </Row>
          </div>
            </Form>
          </Col>
          <Col>
            <Card>
  <Card.Header>Topic Details</Card.Header>
  <Card.Body>
    
  </Card.Body>
</Card>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default ResearchTopic