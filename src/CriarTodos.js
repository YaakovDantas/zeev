import React, {useState} from 'react';
import './estilo.css';

function CriarTodos(props){
    
    const [todo, setTodo] = useState('');

    const writeTodos = ()=>{
        if(props.atv.todos.length > 0){
          return props.atv.todos.map((item => {
              return <div id={item}> <input type="checkbox" onClick={ (e)=>{ props.riscarAtv(props.atv, todo) } } /> { item }</div>           
          }))
        }
    }
    return(
        <div>
            <label>{props.atv.nome}:
                <input type="text"  onChange={ (e)=>{setTodo(e.target.value)} } />
            </label>
            <button onClick={()=>{props.addTodos(props.atv, todo)}} >Add item</button>
                {  writeTodos()  }
            <hr/>
        </div>
    );
}

export default CriarTodos;