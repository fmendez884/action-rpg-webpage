import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./components/Layout";

import DamnationWebPlayer from "./components/DamnationWebPlayer";


// Get started by creating a new React 
// component and importing the libraries!

// import React from "react";
// import Unity, { UnityContent } from "react-unity-webgl";

export default class App extends React.Component {
  
  // unityContent = new UnityContent(
  //   "../public/damnation-web.json",
  //   "../public/Build/UnityLoader.js"
  // );
  
  constructor(props: any) {
    super(props);

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

  }

  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.
    
    // <Unity unityContent={this.unityContent} />;

    return (
      <div className="App">
        <Provider store = {store}>
          <Layout />
          {/* <DamnationWebPlayer></DamnationWebPlayer> */}
        </Provider>
      </div>
    );
  }
}



/**************************************************************************** */


// function App() {
//   return (
//     <div className="App">
//       <Provider store = {store}>
//         <Layout />
//       </Provider>
//     </div>
//   );
// }

// export default App;

/*************************************************************************** */

