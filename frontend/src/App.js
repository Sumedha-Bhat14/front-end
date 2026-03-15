//  import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> 
//   );
// }

// export default App;  

import React from "react";
// import Login from "./pages/Login"; 
//import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<Route path="/employee" element={<EmployeeDashboard />} />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employee" element={<EmployeeDashboard />} />
         {/* <Route path="/admin" element={<AdminDashboard />} />  */}
      </Routes>
    </BrowserRouter>
  );
}


//       <Login /> 
//     </div> 
   //);
//} 
    //<div>
      //<AdminDashboard />
    //</div>
    
      
  

   
   export default App; 
  
