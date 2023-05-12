import React, {useState} from 'react';
import { toast } from "react-toastify";
function Lojinha(props){
    const [ valor, setValor ] = React.useState(0)
    const [ Itens, setItens ] = React.useState(0)
    function finalizarCompra(){
        setValor(0)
        setItens(0)
        toast("Compra Finalizada com Sucesso!")
      }
      function realizaCompra( preco ){
        setValor( valor + preco )
        setItens(Itens + 1)
      }
    return(
      <div>
    <div> 
      <h1> Lojinha </h1>
      <p> Itens no carrinho: <span className='badge bg-danger'></span>{ Itens } </p>
      <p className='alert alert-info'> Valor total: R$ { valor } </p>
      <button className='btn btn-info' onClick={ ()=> finalizarCompra() }> Finalizar compra </button>
      <hr/>
      <div className='d-flex'>
      <div class="card">
        <img src="https://a-static.mlcdn.com.br/800x560/camisa-polo-masculina-azul-claro-kelvy-s-camisas/kelvyscamisas/6145399428/c121cdda1cc84f38c7a1c5f9d91212d2.jpeg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Camisa Polo</h5>
          <p class="card-text">R$ 79,90</p>
          <button class="btn btn-primary">Comprar</button>
  </div>
 

      <div class="card">
        <img src="https://www.guller.com.br/312-large_default/camisa-jeans-masculna-casual-slim-fit-algod%C3%A3o-ver%C3%A3o-manga-comprida.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Camisa Jeans</h5>
          <p class="card-text">R$ 120,00</p>
          <button class="btn btn-primary">Comprar</button>
  </div>
</div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX575_.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Tênis Nike</h5>
          <p class="card-text">R$ 110,99</p>
          <button class="btn btn-primary">Comprar</button>
  </div>
  
    </div>
      {/* <ul className='list-group d-flex flex-row justify-content-between'>
        <li className='list-group-item'> 
        <p> Camisa Polo - R$ 79,90 
      <button className='btn btn-success' onClick={ ()=> realizaCompra (valor + 79.90)}> Comprar </button>
      </p>
        </li>

        <li className='list-group-item'>
        <p> Camisa Jeans - R$ 120,00 
      <button className='btn btn-success' onClick={ ()=> realizaCompra (120.00)}> Comprar </button></p>
        </li>
        
        <li className='list-group-item'>
        <p> Tênis Nike - R$ 110,99 
      <button className='btn btn-success' onClick={ ()=> realizaCompra (valor + 110.99)}> Comprar </button></p>
        </li>
      </ul> */}
      <hr/>
      <button className='btn btn-danger' onClick={()=> props.setLogin(false)}> Sair </button>
  </div>
  </div>
  </div>
  </div>
    )
}

export default Lojinha;