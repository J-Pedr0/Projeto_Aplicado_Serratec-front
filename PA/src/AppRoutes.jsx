import React, {Children, useContext} from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes, 
    Navigate,
} from "react-router-dom";

import AlteracaoUsuario from "./pages/AlteracaoUsuario";
import CadastroAtivos from "./pages/CadastroAtivos";
import Equipamento from "./pages/Equipamento";
import Gestao from "./pages/Gestao";
import Home from "./pages/Home";
import ListaAtivos from "./pages/ListaAtivos";
import ListaFuncionarios from "./pages/ListaFuncionarios";
import Login from "./pages/Login";
import Notificacoes from "./pages/Notificacoes";
import Perfil from "./pages/Perfil";
import Usuario from "./pages/Usuario";
import { AuthProvider, AuthContext} from "./contexts/auth";
import EdicaoAtivos from "./pages/EdicaoAtivos";
import Edicao from "./pages/Edicao";
import AdicaoMovimento from "./pages/AdicaoMovimento";
import HistoricoMovimento from "./pages/HistoricoMovimento";

function AppRoutes() {

    const Private = ({children}) => {
        const {isAuthenticated, loading} = useContext(AuthContext);

        if (!isAuthenticated) {
            return <Navigate to="/login"/>
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />

                    
                    <Route exact path="/" element={<Private><Home/></Private>} />




                    <Route path="/cadastroativos" element={<Private><CadastroAtivos/></Private>} />
                    <Route path="/equipamento/:id" element={<Private><Equipamento /></Private>} />
                    <Route path="/gestao" element={<Private><Gestao /></Private>} />
                    <Route path="/listaativos" element={<Private><ListaAtivos /></Private>} />
                    <Route exact path="/alteracao" element={<Private><AlteracaoUsuario /></Private>} />
                    <Route path="/funcionarios" element={<Private><ListaFuncionarios /></Private>} />
                    <Route path="/notificacoes" element={<Private><Notificacoes /></Private>}/>
                    <Route path="/perfil" element={<Private><Perfil /></Private>} />
                    <Route path="/usuario" element={<Private><Usuario /></Private>} />
                    <Route path="/edicaoativos/:id" element={<Private><EdicaoAtivos /></Private>} />
                    <Route path="/edicao/:id" element={<Private><Edicao /></Private>} />
                    <Route path="/adicaomovimento/:id" element={<Private><AdicaoMovimento /></Private>} />
                    <Route path="/historico/:id" element={<Private><HistoricoMovimento /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;