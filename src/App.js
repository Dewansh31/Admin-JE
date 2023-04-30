import Sidebar from "./Sidebar";

import FreeMember from "./FreeMember";
// import Table from "./Table";

// import AddCaste from "./AddCaste";

import AddMember from "./AddMember";
import AddReligion from "./AddReligion";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from "./Dashboard";
import PemiumMember from "./PemiumMember";
import AddCaste from "./AddCaste";

function App() {
  return (
    <div>
      <Sidebar/>
      {/* <AddMember/> */}
      {/* <AddCaste/> */}
      {/* <Table/> */}
      {/* <AddReligion/> */}
      {/* <FreeMember/> */}
      {/* <PemiumMember/> */}
 {/* <Router> */}
 <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addreligion" element={<AddReligion/>} />
        <Route path="/addcaste" element={<AddCaste/>}/>
        <Route path="/addmember" element={<AddMember/>} />
        <Route path="/freemember" element={<FreeMember/>} />
        <Route path="/premiummember" element={<PemiumMember/>} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
