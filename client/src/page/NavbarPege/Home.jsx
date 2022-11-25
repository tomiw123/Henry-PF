import React from "react";
import Nav from "../../component/Navbar/Nav";

import { useAuth } from "../../contex/auth";

function Home() {
  const auth = useAuth();
  return (
    <div >
     <Nav/>
     <div >
      <h1 >LA PUTA QUE TE PARIO PROFE</h1>
     </div>
    </div>
  );
}

export default Home;