import React from "react";
import Nav from "../../component/Navbar/Nav";

import { useAuth } from "../../contex/auth";

function Home() {
  const auth = useAuth();
  return (
    <div >

      <Nav/>

    </div>
  );
}

export default Home;