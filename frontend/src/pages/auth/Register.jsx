import React, {useState} from "react";
import { Container, Row, Col, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import authService from "../../services/authentication/auth.services";
import "../../static/authStyle.css";

const Register = () => {
  const [studentid, setUserId] = useState('')
  const [studentfirstname, setUserFirstName] = useState('')
  const [studentlastname, setUserLastName] = useState('')
  const [studentemail, setUserSliitEmail] = useState('')
  const [studentpersonalemail, setUserPersonalMail] = useState('')
  const [contactnumber, setUserPhone] = useState('')
  const [degree, setUserDegree] = useState('')
  const [specialization, setUserSpecialization] = useState('')
  // const [role, setUserRole] = useState('')
  const [password, setUserPassword] = useState('')





  const reg_func = () => {
    authService.signUp(
      studentid,
      studentfirstname,
      studentlastname,
      studentemail,
      studentpersonalemail,
      contactnumber,
      degree,
      specialization,
      "STUDENT",
      password
    ).then((res) =>{
      console.log("Result after adding to cart", res)
    }
    )
  }

  return (
    <div>
      <Container fluid className="auth_container">
        <Row>
          <Col md={6} className="auth_left_col">
            <img
              src="/images/10088.jpg"
              width="1000"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md={6} className="auth_right_col">
            <h1 className="auth_top_header">Register</h1>
            <h6 id="acadRegLink">
              {" "}
              <Link to="/academicRegister">Register as academic member</Link>
            </h6>

            <Form className="login_form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={studentfirstname} onChange={(e)=>{setUserFirstName(e.target.value)}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={studentlastname} onChange={(e)=>{setUserLastName(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">
                  Registration Number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Register number"
                  value={studentid} onChange={(e)=>{setUserId(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">
                  SLIIT Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your sliit email address"
                  value={studentemail} onChange={(e)=>{setUserSliitEmail(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">
                  Personal Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your sliit email address"
                  value={studentpersonalemail} onChange={(e)=>{setUserPersonalMail(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">
                  Mobile Number
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your mobile number"
                  value={contactnumber} onChange={(e)=>{setUserPhone(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">Degree</Form.Label>

              
              <Form.Select aria-label="Default select example" value={degree} onChange={(e)=>{setUserDegree(e.target.value)}}>

                <option>Select Faculty</option>
                <option value="IT">Faculty of computing</option>
                <option value="BM">SLIIT Business School</option>
                <option value="HS">Faculty of Humanities and Sciences</option>
                </Form.Select>
                </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabelStyler">
                  Specialization
                </Form.Label>
              <Form.Select aria-label="Default select example" value={specialization} onChange={(e)=>{setUserSpecialization(e.target.value)}}>
                

                <option>Select specialization</option>
                <option value="SE">Software Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="CSNE">Networking</option>
                </Form.Select>
                </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="FormLabelStyler">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setUserPassword(e.target.value)}} />
              </Form.Group>
              <div className="center_wrapper">
                <Button variant="primary" className="GlobalButton" onClick={(e)=>{reg_func()}}>
                  Sign up
                </Button>
              </div>
            </Form>

            <h6 className="center_wrapper">
              Already have an account? <Link to="/">Sign in</Link>{" "}
            </h6>
          </Col>
        </Row>

        <div className="auth_footer">
          <Nav className="justify-content-left" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">
                <img
                  src="/images/sliit.png"
                  width="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://courseweb.sliit.lk">
                <img
                  src="/images/cw.png"
                  width="40"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="link-2">
                <img
                  src="/images/fb.png"
                  width="40"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="link-2">
                <img
                  src="/images/lkdn.png"
                  width="40"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </div>
  );
};

export default Register;
