import React,{useState} from 'react';
function CriarAtividade(props){
    const [nomeAtv, setNomeAtv] = useState('');
    return (
        <div>
            <label>Criar atividade:
                <input type="text" value={nomeAtv} onChange={ (e)=>{setNomeAtv(e.target.value)} } />
            </label>
            
            <button onClick={ ()=>{props.addAtv(nomeAtv)} } >Criar</button>
        </div>

    );
}

export default CriarAtividade;