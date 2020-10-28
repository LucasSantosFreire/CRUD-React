import styled, {css} from 'styled-components' 

const Input = styled.input`
width: 30%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
background-color: #00b4d8;
color: black;
border: 2px solid black;
border-radius: 4px;

${props => props.botao && css`
  border: none;
  width: 15%;
`}
`

const Text = styled.textarea`
width: 30%;
padding: 12px 20px;
height: 150px;
margin: 0px;
box-sizing: border-box;
background-color: #00b4d8;
color: black;
border: 2px solid black;
border-radius: 4px;
resize: none;
`


const Forms = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Row = styled.div`
  margin: 0 -5px;
  &:after{
    content: "";
    display: grid;
    clear: both;
  }
`
const Titulo = styled.h2`
display: flex;
justify-content: center;
align-items: center;
`

export {Forms, Input, Row, Text, Titulo};