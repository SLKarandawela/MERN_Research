import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const AcademicNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="topNav">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="/images/sliit.png"
              width="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="topNavLinks">
                Home
              </Nav.Link>
              <NavDropdown
                title="Group"
                id="submittion_links"
                className="topNavDropdowns"
              >
                <NavDropdown.Item href="/group">Create Group</NavDropdown.Item>
                

               

                
              </NavDropdown>

              
              <NavDropdown
                title="Topic"
                id="submittion_links"
                className="topNavDropdowns"
              >
                <NavDropdown.Item href="/topic">Create Topic</NavDropdown.Item>
                

               

               
              </NavDropdown>




              <NavDropdown
                title="Submissions"
                id="submittion_links"
                className="topNavDropdowns"
              >
                <NavDropdown.Item href="/createSubmission">
                  Create Submittion Type
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="/submissions">
                  View all submittions
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
              {/* Marking Schemes */}
              <NavDropdown
                title="Evaluation"
                id="submittion_links"
                className="topNavDropdowns"
              >
                <NavDropdown.Item href="/addEvaluation">
                  Create new evaluation
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/evaluation">
                  View Evaluations
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/chat" className="topNavLinks">
                Chat
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AcademicNav;
