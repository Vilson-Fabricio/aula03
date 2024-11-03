import React from 'react';

export default function ListaProdutos({ produtos }) {
    return (
            <>
                <img src='https://marketplace.canva.com/EAFQERkhyA0/1/0/1600w/canva-banner-para-mercado-shops-grande-black-friday-moderno-vermelho-e-preto-OTBW2SeoGCE.jpg' alt='banner'/>

                <h1>Lorem</h1>
                <ul>
                    {produtos.map(produto => (
                        <li key={produto.id}>
                            <img src={produto.image} alt={produto.title} width={100} />
                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>
                            <p>Preço: R${produto.price}</p>
                            <button>COMPRAR</button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }