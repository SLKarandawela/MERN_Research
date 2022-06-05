import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import { getAllSubmissions, viewSingleSubmission } from "../../services/submssion/submission.services";
import("../../static/submissionList.css");


const AllSubmissions = () => {
    const navigate = useNavigate();
    const [submissions, setSubmissions] = useState([]);
    
      const viewSingleSubmifunc = (sub) => {
    console.log(sub._id)
    const assignment_id = sub._id
    // alert('this is item quantity',itemQuantity)
    

    viewSingleSubmission(assignment_id).then((res) =>{
      console.log("Result after adding to cart", res)
      navigate('/uploadAnswer', {state:res});
      
    }
    ).catch((e)=>{
      console.log("error while adding the product to cart!")
    })



  }

  useEffect(() => {
    getAllSubmissions().then((res) => {
      // console.log(res)
      setSubmissions(res);
    });
  }, []);

  return (
    <div>
      <AcademicNav></AcademicNav>
      <Container>
        <br />
        <h5>Submissions to be done</h5>
        <br />
        {submissions.map((submission, index) => (
          <Card className="submissionImgWrapper">
            <Row>
              <Col md={2}>
                <img
                  src="/images/document.png"
                  width="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Col>
              <Col md={4}>
                <h6>{submission.title}</h6>
              </Col>
              <Col md={3}>
                <h6>{submission.dueDate}</h6>
              </Col>

              <Col md={3}>
                        <Row>
                            <Col>
                                <Button variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                            </Col>
                            <Col>
                                <Button variant="warning"><i class="fa-solid fa-pen"></i></Button>
                            </Col>
                            <Col>
                                <Button variant="success" onClick={()=>{viewSingleSubmifunc(submission)}}><i class="fa-solid fa-file-circle-plus"></i></Button>
                            </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default AllSubmissions;
