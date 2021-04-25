import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import App from './App';//
import Movie from './movie';
import ReviewList from './review-list';
//import Review from './review';
import reportWebVitals from './reportWebVitals';

function Header() {
  return <h1 className="text-center">Unconventional Christmas Movie Face-off</h1>
}

ReactDOM.render(
  <div>
    <Header />
    <Movie />
    <br />
    <ReviewList />
  </div>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
