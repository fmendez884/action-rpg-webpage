import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
