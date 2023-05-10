import "./App.css";

import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (

  
    <div class="text-center text-light">
      <h2>Profil</h2>
      <div>
  
 <>
   <ProfilePhoto />
 </>

 <>
   <><FullName></FullName></>

 </>
 <>
   <Address />
 </>
 

      </div>
      
    </div>
  );
}

export default App;
