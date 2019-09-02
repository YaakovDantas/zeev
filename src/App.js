import React, {useState, useEffect} from 'react';
import CriarAtividade from './CriarAtividade'
import CriarTodos from './CriarTodos'

let numAtv = 0;

function App() {
  const [atividades, setAtividades] = useState([]);
  const [id, setId] = useState(numAtv);
  useEffect(()=>{
    setAtividades(atividades)
  })
  const riscarAtv = (atv, todo)=>{
    
    let div = document.getElementById(todo)
    div.className += "text"
  }
  const addAtv = (nome)=>{
    const dict = {nome, todos:[], id};
    numAtv++;
    setId(numAtv)
    setAtividades([...atividades,dict])
    
  }
  const addTodos = (atv, todo)=>{

    const idx = atividades.findIndex(item =>{
      return item.id === atv.id
    })
    atv['todos'].push(todo)
    atividades[idx] = atv
    setAtividades([...atividades])
  }
  const createAtv = ()=>{
    return (<CriarAtividade addAtv={addAtv} />);
  }
  const criarTodos = ()=>{
    return atividades.map((item)=>{
      return (<CriarTodos atv={item} addTodos={addTodos}  riscarAtv={riscarAtv} />);
    });
    
  }
  return (
    <div>
      { createAtv() }
      <hr/>
      <h3>Atividades</h3>
      { criarTodos() }
    </div>
  );
}

export default App;
