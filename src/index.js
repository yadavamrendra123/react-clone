import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import MainComponent from './MainComponent'
import React, { useEffect } from 'react';

function Example() {
    useEffect(() => {
      document.title = 'React info-site';
    });
  }
  


// ReactDOM.render(
//     <div className='card'>
//         <Example />
//         <Header />
//         <MainComponent />
//     </div>
// , document.getElementById("root"))

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

  root.render( <div className='card'>
  <Example />
  <Header />
  <MainComponent />
</div>);