import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro/Cadastro';
import EditarCadastro from './components/EditarCadastro/EditarCadastro';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cadastro />} index />
                <Route path="/editar" element={<EditarCadastro />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;