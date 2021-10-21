import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import {RecoilRoot} from "recoil";
import AccountStateProvider from "./config/AccountStateProvider";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AccountStateProvider>
        <App />
      </AccountStateProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
