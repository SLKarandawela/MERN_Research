import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import authService from "../../services/authentication/auth.services";
import { addEvaluation } from "../../services/evaluation/evaluation.services";


const CreateEvaluation = () => {
  // input field states
  const [studentid, setstudentid] = useState("");
  const [groupid, setgroupid] = useState("");
  const [researcharea, setresearcharea] = useState("");
  const [researchtopic, setresearchtopicd] = useState("");
  const [result, setresult] = useState("");
  const [remark, setremark] = useState("");

  const logged_user = authService.getCurrentUser();
  const loggedUserId = logged_user.sliitId;


  const addEvaluationFunc = (e) => {
    e.preventDefault();

    const data = {
    studentid,
    groupid,
    researcharea,
    researchtopic,
    result,
    evaluatorid:loggedUserId,
    evaluatorname: "Mihan Ekanayake",
    evaluationdate: "2022-05-24T00:00:00.000Z",
    remark
    };

    addEvaluation(data)
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

      <h5 className="titleClass">Create new Evaluation</h5>
      <Container>
        <Form id="createSubmissionForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Student Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student Registration Number"
              value={studentid}
              onChange={(e) => {
                setstudentid(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Group Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student Group Id"
              value={groupid}
              onChange={(e) => {
                setgroupid(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Research Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student Registration Area"
              value={researcharea}
              onChange={(e) => {
                setresearcharea(e.target.value);
              }}
            />
          </Form.Group>

 

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabelStyler">Research Topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Research Topic"
              value={researchtopic}
              onChange={(e) => {
                setresearchtopicd(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabelStyler">Result</Form.Label>
            <Form.Control
              type="text"
              placeholder="Results"
              value={result}
              onChange={(e) => {
                setresult(e.target.value);
              }}
            />
          </Form.Group>

                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formLabelStyler">
              Remarks
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={remark}
              onChange={(e) => {
                setremark(e.target.value);
              }}
            />
          </Form.Group>

          <div className="center_wrapper">
            <Row>
              <Col md>
                <Button
                  variant="danger"
                  className="globalCancelButton"
                  onClick={(e) => {
                    addEvaluationFunc(e);
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
                    addEvaluationFunc(e);
                  }}
                >
                  <i class="fa-solid fa-check"></i> Create Evaluation
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateEvaluation;
