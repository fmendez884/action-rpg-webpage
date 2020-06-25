import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import Unity, { UnityContent } from "react-unity-webgl";

import GobletFire from "./GobletFire";

export default class DamnationWebPlayer extends React.Component {
  
  unityContent = new UnityContent(
    "./Build/damnation-web.json",
    "./Build/UnityLoader.js",
    {
      adjustOnWindowResize: false
    
    }
  );
  
  webPlayerWidth = 1000;
  
  constructor(props: any) {
    super(props);
    

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

  }

  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.

    return (
    
        <div className="WebPlayer" style={{width: this.webPlayerWidth}}>
            <Unity unityContent={this.unityContent}/>
        </div> 
      
    );
  }
  
    // render() {
      
    //     return (
            
    //       <div id="unityContainer" style={{width: 960, height: 600}}></div>
          
    //     );
    // }
}