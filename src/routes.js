import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioContext } from "common/context/Usuario";

export default function AppRoutes() {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    return (


        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={ <Login />}>
                       
                    </Route>
                    <Route path="feira" element={<Feira />} />

                    <Route path="carrinho" element={<Carrinho />} />
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    )
}
