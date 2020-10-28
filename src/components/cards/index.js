import React from 'react';
import {Column, Card, Botao} from './style'

function Cards(props) {
  return (
    <>
    <div>
        {props.cards.map((card) => {
          const {id, Titulo, Texto} = card;
          return (
            <Column>
              <Card key={id}>
                <h3>{Titulo}</h3>
                <p>{Texto}</p>
                <Botao onClick={() => props.deletar(id)} class="btn"><i class="fa fa-window-close"></i></Botao>
                <Botao onClick={() => props.editar(id)} class="btn"><i class="fa fa-edit"></i></Botao>
              </Card>
            </Column>
          )
        })}
      </div>
    </>
  );
}

export default Cards;