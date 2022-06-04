// importing chat engine package
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login';
import Register from "./pages/auth/Register";
import UserList from "./pages/users/UserList";
import GroupList from './pages/students/GroupList'
import "./static/global.css"
import CreateSubmittion from "./pages/submittions/CreateSubmittion";
import AllSubmissions from "./pages/submittions/AllSubmissions";
import AddSubmission from "./pages/submittions/AddSubmission";

import ChatApp from "./pages/chat/ChatApp";
import AcademicRegister from "./pages/auth/AcademicRegister";
import CreateGroup from "./pages/group/CreateGroup";
import ResearchTopic from "./pages/topic/ResearchTopic";
import AddEvaluation from "./pages/evaluation/CreateEvaluation"
import AllEvaluations from "./pages/evaluation/AllEvaluations";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/group" element={<CreateGroup />} />
          <Route path="/topic" element={<ResearchTopic />} />
          <Route path="/academicRegister" element={<AcademicRegister />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/groupList" element={<GroupList />} />
          <Route path="/createSubmission" element={<CreateSubmittion />} />
          <Route path="/uploadAnswer" element={<AddSubmission />} />
          <Route path="/submissions" element={<AllSubmissions />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/addEvaluation" element={<AddEvaluation />} />
          <Route path="/evaluation" element={<AllEvaluations/>} />
          
          



          
          
          
          
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
