import React, {useState} from 'react';
function Lojinha(props){
    const [ valor, setValor ] = React.useState(0)
    const [ Itens, setItens ] = React.useState(0)
    function finalizarCompra(){
        setValor(0)
        setItens(0)
        alert("Compra Finalizada com Sucesso!")
      }
      function realizaCompra( preco ){
        setValor( valor + preco )
        setItens(Itens + 1)
      }
    return(
    <div> 
      <h1> Lojinha </h1>
      <p> Itens no carrinho: { Itens } </p>
      <p> Valor total: R$ { valor } </p>
      <button onClick={ ()=> finalizarCompra() }> Finalizar compra </button>
      <hr/>
      <p> Camisa Polo - R$ 79,90 
      <button onClick={ ()=> realizaCompra (valor + 79.90)}> Comprar </button>
      </p>
      <p> Camisa Jeans - R$ 120,00 
      <button onClick={ ()=> realizaCompra (120.00)}> Comprar </button></p>
      <p> Tênis Nike - R$ 110,99 
      <button onClick={ ()=> realizaCompra (valor + 110.99)}> Comprar </button></p>
      <hr/>
      <button onClick={()=> props.setLogin(false)}> Sair </button>
  </div>
    )
}

export default Lojinha;