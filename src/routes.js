import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";

export default function AppRoutes() {
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Login />}>  
            </Route>
            <Route path="feira" element = {<Feira />}/>

            <Route path="carrinho" element = {<Carrinho />}/>
        </Routes>
    </BrowserRouter>
  )
}
