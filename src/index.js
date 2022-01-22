import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';
import CreateUser from './pages/CreateUser';
ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Routes>
       <Route exact path="/"element={<App />}>
        </Route>
       <Route exact path="/login"element={<Login />}>
       </Route>
       <Route exact path="/main"element={<Main />}>
       </Route>
       <Route exact path="/createuser"element={<CreateUser />}>
       </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
