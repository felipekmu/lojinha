import React, { useState } from "react";
import Lojinha from "./Lojinha";
import Menu from "./Menu";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
const [ login, setLogin ] = useState(false)

return (
    <div className="App">
      <ToastContainer/>
      <Menu/>
      {
        login == false ?
        <div>
        <p> Faça login para continuar </p>
        <button className="btn btn-primary" onClick={()=> setLogin(true) }> Logar </button>
        </div>
        :
       <Lojinha setLogin = {setLogin}/>
  }
    </div>
  );
}

export default App;
