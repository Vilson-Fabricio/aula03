import { useEffect, useState } from "react";
import ListaProdutos from "../props";
import '../styles.css';


export default function App() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch (erro) {
                console.error("Erro ao buscar produtos:", erro);
            }
        }
        receberListaProdutos();
    }, []);

    return (
        <>
    <ListaProdutos produtos={lista}/>;
    </>
)
}
    
