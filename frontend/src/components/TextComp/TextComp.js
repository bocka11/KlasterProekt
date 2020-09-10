import React,{useState} from 'react';

import './TextCom.css'


const TextComp = (props)=>{
    const [val,setVal] = useState("");
   return (<div class="form__group">
    <input type={props.type} className="form__input" ref={props.ref} id={props.name} placeholder={props.name} required="" onChange={(event)=>{setVal(event.target.value); props.onSelected(val)}} />
     <label for="name" className="form__label">{props.name}</label>
     
</div>)
};

export default TextComp;