import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from '../src/components/Home'
// import Menu from '../src/components/Menu'



// render(

//         <BrowserRouter>
//             <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route exact path="menu" element={<Menu />}/>
//             </Routes>
//       </BrowserRouter>,
//        document.getElementById('root')
//     )

  