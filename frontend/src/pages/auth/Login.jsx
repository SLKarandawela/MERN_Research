import React, {useState} from "react";
import { Container, Row, Col, Button, Form, Nav } from "react-bootstrap";
import "../../static/authStyle.css";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authService from "../../services/authentication/auth.services";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const login_func = () => {
    authService.login(userName, password).then(() => {
      const logged_user = authService.getCurrentUser();
      console.log("logged user",logged_user.role)
      if (logged_user.role === "STUDENT") {
        navigate("/submissions");
        
      }
      if (logged_user.role === "SUPERVISOR") {
        navigate("/createSubmission");
        
      }
      
      window.location.reload();
    });
  };
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
            <h1 className="auth_top_header">Sign in</h1>

            <Form className="login_form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="FormLabelStyler">SLIIT ID</Form.Label>
                <Form.Control type="email" placeholder="Enter username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="FormLabelStyler">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </Form.Group>
              <div className="center_wrapper">
                <Button variant="primary" className="GlobalButton" onClick={(e)=>{login_func()}}>
                  Sign in
                </Button>
              </div>
            </Form>

            <h6 className="center_wrapper">Not a Registered Student? <Link to="/register">Sign up</Link>  </h6>
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

export default Login;
