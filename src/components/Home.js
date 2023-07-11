import React from "react";

import Notes from "./Notes";
function home(props) {

  

  return (
    <div>
     
    <Notes showAlert={props.showAlert} />
    </div>
  );
}

export default home;
