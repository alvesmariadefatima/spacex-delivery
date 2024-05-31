import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-white">
            <nav className="p-4 shadow-md flex flex-col md:flex-row items-center justify-center">
                    <p className="text-center text-5xl p-4 text-blue-950 font-bold font-roboto">🪐 SpaceX</p>
                <div className="flex flex-row md:flex-row md:items-center justify-center"> {/* Adicionado justify-center aqui */}
                    <a className="text-blue-950 font-bold px-4" href="/">Home</a>
                    <a className="text-blue-950 font-bold px-4" href="#">Serviços</a>
                    <a className="text-blue-950 font-bold px-4" href="#">Sobre</a>
                    <a className="text-blue-950 font-bold px-4" href="#">Contato</a>
                </div>

                <Link to="/editar">
                    <button className="text-white bg-blue-950 p-2 rounded">Editar Cadastro</button>                
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
