import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import RouteApp from './RoutApp'
import StyleApp from './StyleApp'
import reportWebVitals from './reportWebVitals';
import HooksApp from './Hooks/HooksApp';
import UseMemoApp from './Hooks/UseMemoApp';
import AppStyled from './styledcomponen/AppStyled';
import ProfileUser from './online/ProfileUser';
import TickTokApp from './ticktok/TickTokApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ProfileUser/> */}
    <TickTokApp/>
    
    {/* <AppStyled/> */}
    {/* <UseMemoApp/> */}
    {/* <StyleApp></StyleApp> */}
    {/* <BrowserRouter>
     <RouteApp />
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
