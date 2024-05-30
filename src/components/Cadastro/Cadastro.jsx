import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from './Cadastro.module.css'
import Footer from "../Footer/Footer";

function Cadastro () {
    return (
        <div className={`${styles.bgSite} relative overflow-hidden`}>
            <Navbar />
                <p className="text-white font-bold text-center font-roboto text-3xl p-4">SpaceX Delivery: Cadastro</p>
            
            <div className="bg-white p-4 mx-6 md:mx-80 my-8 rounded"> {/* Adicionando border radius à div */}
            <div className="relative mb-4"> {/* Adicionando margem inferior para separar os campos */}
                <input type="text" placeholder="Nome Completo" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
            </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="text" placeholder="Endereço" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="text" placeholder="Número/Complemento" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="text" placeholder="Bairro" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="text" placeholder="Cidade" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4">
                    <select className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black">
                        <option value="" disabled selected hidden>Selecione o Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="tel" placeholder="E-mail" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <input type="text" placeholder="Telefone" className="bg-transparent border-b border-blue-800 w-full focus:outline-none focus:border-blue-800 p-1 placeholder-black" />
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <p className="text-black text-left py-2">Tipo de Entrega:</p>
                    <div className="flex items-center">
                        <input type="radio" id="express" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="express" className="text-sm text-black">Entrega Expressa</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="padrao" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="padrao" className="text-sm text-black">Entrega Padrão</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="programada" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="programada" className="text-sm text-black">Entrega Programada</label>
                    </div>
                </div>

                <div className="relative mb-4"> {/* Adicionando margem inferior */}
                    <p className="text-black text-left py-2">Tipo de Pagamento:</p>
                    
                    <div className="flex items-center">
                        <input type="radio" id="express" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="express" className="text-sm text-black">Dinheiro</label>
                    </div>

                    <div className="flex items-center">
                        <input type="radio" id="padrao" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="padrao" className="text-sm text-black">Cartão de Crédito/Débito</label>
                    </div>

                    <div className="flex items-center">
                        <input type="radio" id="programada" name="tipo-entrega" className="h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded mr-2" />
                        <label htmlFor="programada" className="text-sm text-black">Pix</label>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="text-white bg-blue-950 p-2 rounded">Voltar</button>
                    <button className="text-white bg-blue-950 p-2 rounded">Cadastrar</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cadastro;