import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import {Forms, Input, Row, Text, Titulo} from './style'
import Cards from '../cards'

function Form() {
    const [cards, setCards] = useState([]);
    const [editCard, setEditCard] = useState();
    const [idEdit, setIdEdit] = useState();
    const [editando, setEditando] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm();
    console.log(errors);
    
    const onSubmit = (data) => {
      data.id = cards.length+1;
      setCards([...cards, data]);
      reset();
    }

     const deleteCard = id => {
      setCards(cards.filter((card) => card.id !== id));
     } 

     const editarCard = id => {
      const cardEditando = cards.filter((card) => card.id === id);
      setEditCard(cardEditando);
      setIdEdit(id);
      setEditando(true);
     }

     const alterarInfo = (data) => {
      const { Titulo, Texto } = data;
      const id = idEdit;
      const vetorModificado = cards.map(card => card.id === idEdit ? {id, Titulo, Texto} : card);
      setCards(vetorModificado);
      reset();
      setEditando(false);
      console.log(cards);
     }

    return (
      <div>
      {editando ? (
        <div>
        <Titulo>Editar anotação</Titulo>
        <Forms onSubmit={handleSubmit(alterarInfo)}>
          <Input type="text" defaultValue={editCard[0].Titulo} placeholder="Titulo" name="Titulo" ref={register({required: true, maxLength: 80})} />
          <Text text placeholder="Anotação" defaultValue={editCard[0].Texto}  name="Texto" ref={register({required: true, maxLength: 200})} />
          <Input botao type="submit" value="Editar"/>
        </Forms>
        </div>
      ):(
      <div>
      <Titulo>Adicionar anotação</Titulo>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" id="Titulo" placeholder="Titulo" defaultValue="" name="Titulo" ref={register({required: true, maxLength: 80})} />
        <Text text placeholder="Anotação" id="Texto" defaultValue="" name="Texto" ref={register({required: true, maxLength: 200})} />
        <Input botao type="submit" value="Adicionar"/>
      </Forms>
      </div>
      )
      }
      <Row>
        <Cards cards={cards} deletar={deleteCard} editar={editarCard}/>
      </Row>
      </div>
    );
}

export default Form;