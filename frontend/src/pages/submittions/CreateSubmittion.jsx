import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import { addSubmission } from "../../services/submssion/submission.services";
import "../../static/createSubmission.css";

const CreateSubmittion = () => {
  // input field states
  const [subTitle, setSubTitle] = useState("");
  const [subDesc, setSubDesc] = useState("");
  const [endDate, setEndDate] = useState("");

  const addSubmissionFunc = (e) => {
    e.preventDefault();

    const data = {
      title: subTitle,
      description: subDesc,
      dueDate: endDate,
      author: "Shalitha",
      availability:true
    };

    addSubmission(data)
      .then((res) => {
        console.log("Added Submittion is", res);
      })
      .catch((e) => {
        alert("error while adding the submission!");
      });
  };

  return (
    <div>
      <AcademicNav></AcademicNav>
      <br />

      <h5 className="titleClass">Create new submission</h5>
      <Container>
        <Form id="createSubmissionForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              value={subTitle}
              onChange={(e) => {
                setSubTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formLabelStyler">
              Submission Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={subDesc}
              onChange={(e) => {
                setSubDesc(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabelStyler">Due date</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="end date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabelStyler">Upload Marking Scheme</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <div className="center_wrapper">
            <Row>
              <Col md>
                <Button
                  variant="danger"
                  className="globalCancelButton"
                  onClick={(e) => {
                    addSubmissionFunc(e);
                  }}
                >
                  <i class="fa-solid fa-xmark"></i> Cancel
                </Button>
              </Col>
              <Col md>
                <Button
                  variant="success"
                  className="globalButton"
                  onClick={(e) => {
                    addSubmissionFunc(e);
                  }}
                >
                  <i class="fa-solid fa-check"></i> Create Submission
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateSubmittion;
