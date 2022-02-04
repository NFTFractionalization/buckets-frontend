import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CollectionExample from './pages/CollectionExample';
import Navbar from './components/Navbar';
const Routing = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={App} />
        <Route exact path="/col" component={CollectionExample} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/service" component={Service} /> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    {/* <Routing/> */}
    <Navbar />
    <CollectionExample/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
