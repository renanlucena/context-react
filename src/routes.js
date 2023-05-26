import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";

export default function AppRoutes() {

    return (



        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={
                        <UsuarioProvider>
                            <Login />
                        </UsuarioProvider>
                    } />



                <Route path="feira" element={<Feira />} />

                <Route path="carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>

    )
}
