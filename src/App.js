import React, {useState} from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

const App = () => {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
    <div>
        <Header>contactSelected={contactSelected}</Header> 
    {/* </div>
        <Projects></Projects>
    <div> */}
        <Footer></Footer>
    </div>


    </>

  )

}



export default App;