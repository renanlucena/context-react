import {BrowserRouter, Routes, Route} from "react-router-dom";

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";

export default function AppRoutes() {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Login nome = {nome} setNome={setNome} saldo={saldo} setSaldo={setSaldo}/>}>  
            </Route>
            <Route path="feira" element = {<Feira />}/>

            <Route path="carrinho" element = {<Carrinho />}/>
        </Routes>
    </BrowserRouter>
  )
}
