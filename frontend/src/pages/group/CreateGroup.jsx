import React, { useState,useEffect } from 'react'
import { Container, Form, Button, Row, Col,Card } from "react-bootstrap";
import { createGroup, getGroup } from '../../services/group/group.services';
import AcademicNav from "../../components/AcademicNav";
import "../../static/uploadAnswer.css";
import authService from '../../services/authentication/auth.services';

const CreateGroup = () => {

  const logged_user = authService.getCurrentUser();
  const loggedUserId = logged_user.sliitId;

  const [groupName, setGroupName] = useState("");
  const [groupMemb1, setGroupMemb1] = useState("")
  const [groupMemb2, setGroupMemb2] = useState("")
  const [groupMemb3, setGroupMemb3] = useState("")
  const [groupMemb4, setGroupMemb4] = useState("")
  const [groupInfo, setGroupInfo] = useState("")

  const addGroupFunc = (e) => {
    e.preventDefault();

    const data = {
      groupName: groupName,
      groupMembers:[groupMemb1,groupMemb2,groupMemb3,groupMemb4]
      
    };

    createGroup(data)
      .then((res) => {
        console.log("Added Submittion is", res);
      })
      .catch((e) => {
        alert("error while adding the submission!");
      });
  };


  const viewGroupInfo = (e) => {
    
    const user_id = loggedUserId
    const sliit_id_num = logged_user.sliitId
    console.log("SLIIT ID", sliit_id_num)
    // alert('this is item quantity',itemQuantity)
    const data = {
      studentId : sliit_id_num
    }
    

    getGroup(data).then((res) =>{
      console.log("Result after adding to cart", res)
      // setGroupInfo(res)
      
      
    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })



  }

   useEffect(() => {
    // getGroup(loggedUserId).then((res) => {
    //   // console.log(res)
    //   setGroupInfo(res);
    // });
  });





  return (
      <div>
        <AcademicNav></AcademicNav>
      <br />

      <h5 className="titleClass">Create Research Group</h5>
      <Container>
        <Row>
          <Col>
            <Form id="createSubmissionForm">
              

              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Group Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Group name"
              value={groupName}
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
              </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Member 1 Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              value={groupMemb1}
              onChange={(e) => {
                setGroupMemb1(e.target.value);
              }}
            />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Member 2 Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              value={groupMemb2}
              onChange={(e) => {
                setGroupMemb2(e.target.value);
              }}
            />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Member 3 Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              value={groupMemb3}
              onChange={(e) => {
                setGroupMemb3(e.target.value);
              }}
            />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabelStyler">Member 4 Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter submission title"
              value={groupMemb4}
              onChange={(e) => {
                setGroupMemb4(e.target.value);
              }}
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
                  onClick={(e) => {
                    addGroupFunc(e);
                  }}
                >
                  <i class="fa-solid fa-check"></i> Create Submission
                </Button>
              </Col>
            </Row>
          </div>
            </Form>
          </Col>
          <Col>
            <Card>
              <Card.Header>Group Details</Card.Header>
              <Button variant="info" onClick={(e) => {
                    viewGroupInfo(e);
                  }}
                >Refresh</Button>

              <p>{ groupInfo.groupName}</p>
</Card>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default CreateGroup