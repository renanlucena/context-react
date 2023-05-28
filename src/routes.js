import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";

export default function AppRoutes() {

    return (



        <BrowserRouter>

            <UsuarioProvider>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="feira" 
                    element={
                        <CarrinhoProvider>
                            <Feira />
                        </CarrinhoProvider>
                            } />

                    <Route path="carrinho" 
                    element={
                    
                        <Carrinho />
                    
                    } />
                </Routes>
            </UsuarioProvider>

            
        </BrowserRouter>


    )
}
