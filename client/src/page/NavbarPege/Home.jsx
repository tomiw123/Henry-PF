import React from "react";
import Nav from "../../component/Navbar/Nav";

import { useAuth } from "../../contex/auth";

function Home() {
  const auth = useAuth();
  return (
    <div >
     <Nav/>
     <div >
      <h1 >Soy tu hna</h1>
     </div>
    </div>
  );
}

export default Home;