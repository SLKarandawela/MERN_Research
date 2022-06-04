import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import AcademicNav from "../../components/AcademicNav";
import "../../static/chat.css";
import OutMessage from "../../components/OutMessage";
import InMessage from "../../components/InMessage";
import ChatBox from "../../components/ChatBox";
import AcademicUserChatList from "../../components/AcademicUserChatList";
import StudentUserChatList from "../../components/StudentUserChatList";

import {
  createChat,
  createMessage,
  getAllConversations,
  getAllUsers,
  getChat,
} from "../../services/chat/chat.services";
import authService from "../../services/authentication/auth.services";

const ChatApp = () => {
  const logged_user = authService.getCurrentUser();
  const loggedUserId = logged_user.stdId;
  console.log("Logged user Id", loggedUserId);
  const [conversations, setConversations] = useState([]);
  const [chatMessage, setChatMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatSingleId, setNewChatId] = useState("");
  const [users, SetUsers] = useState([]);

  const viewSingleChatfunc = (sub) => {
    console.log(sub);
    const chat_id = sub;
    setNewChatId(chat_id)
    // alert('this is item quantity',itemQuantity)

    getChat(chat_id)
      .then((res) => {
        console.log("Result after adding to cart", res);
        setChatMessage(res);

        // navigate('/uploadAnswer', {state:res});
        // chatOutMessages = res.
      })
      .catch((e) => {
        console.log("error while adding the product to cart!");
      });
  };

  const createMessageFunc = (e) => {
    

    const data = {
      content: newMessage,
      chatId: chatSingleId,
      
    };

    createMessage(data)
      .then((res) => {
        console.log("Added message is", res);
      })
      .catch((e) => {
        alert("error while adding the submission!");
      });
  };

    const createSingleChatFunc = (chatUserId) => {
    

    const data = {
      userId: chatUserId,
      
      
    };

    createChat(data)
      .then((res) => {
        console.log("Added chat is", res);
      })
      .catch((e) => {
        alert("error while adding the submission!");
      });
  };

  useEffect(() => {
    getAllConversations(loggedUserId).then((res) => {
      console.log("ahskd", res);
      setConversations(res);
    });

    getAllUsers().then((res) => {
      console.log("chat users", res);
      SetUsers(res);
    });



    
  }, []);

  return (
    <div>
      <AcademicNav></AcademicNav>

      <Container fluid>
        <Row>
          <Col md={3} id="chatLeftCol">
            <Row id="chaImageRow">
              <img
                src="/images/chatLogo1.png"
                width="5"
                className="chatTopImg"
                alt=""
              />
            </Row>

            <Row>
              <Col>
                <Button variant="success" className="globalMButton">New Chat</Button>
              </Col>
              <Col>
                <Button variant="info" className="globalMButton">New Group Chat</Button>
              </Col>
            </Row>

            <br />

            <Row id="chatThreads">
              {conversations.map((chat, index) => (
                <Card
                  className="chatWrapper"
                  onClick={() => {
                    viewSingleChatfunc(chat._id);
                  }}
                >
                  <Row>
                    <Col lg="2">
                      <img
                        src="/images/single_chat.png"
                        width="50"
                        className="d-inline-block align-top"
                        alt=""
                      />
                    </Col>
                    <Col lg="10">
                      <h6>{chat.chatName}</h6>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Row>
          </Col>

          <Col md={6} id="chatRightCol">
            <Container fluid className="chatContainer">
              <Row id="global_chat_container">
                {chatMessage.map((message, index) =>
                  message.sender._id === loggedUserId ? (
                    <Row className="message_right">
                      <Card className="sendMessage">
                        <p>{message.content}</p>
                      </Card>
                    </Row>
                  ) : (
                    <Row>
                      <Card className="recieveMessage">
                        <p>{message.content}</p>
                      </Card>
                    </Row>
                  )
                )}
              </Row>
              <Row>
                <h6></h6>
              </Row>
              <br />
              <Row>
                <Container className="chatBox">
                  <Row>
                    <Col md={10}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={newMessage}
                          onChange={(e) => {
                            setNewMessage(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2} className="sendBtnCol">
                        
                      <Button onClick={(e)=>{createMessageFunc(e)}} > 
                        <i class="fa-solid fa-paper-plane"></i> Send
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
          <Col md={3} id="chatRightCol">
            
              {users.map((user, index) =>
                 
                <Row>
                  <Card className="userList" onClick={(e)=>{createSingleChatFunc(user._id)}}>
                    {user.studentid}
                  </Card>
                  
                  </Row>
                  
                )}
            
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatApp;
