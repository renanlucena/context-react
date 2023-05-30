import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Login from 'pages/Login';
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

export default function AppRoutes() {

    return (



        <BrowserRouter>

            <UsuarioProvider>
                <CarrinhoProvider>
                <PagamentoProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />

                        <Route path="feira"
                            element={

                                <Feira />

                            } />

                        <Route path="carrinho"
                            element={
                                

                                    <Carrinho />
                                

                            } />
                    </Routes>
                    </PagamentoProvider>
                </CarrinhoProvider>
            </UsuarioProvider>


        </BrowserRouter>


    )
}
