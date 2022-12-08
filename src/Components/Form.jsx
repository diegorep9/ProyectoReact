import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const [input, setInput] = useState({
    fullName: '',
    email: ''
  })

  const [send, setSend] = useState(false)

  const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  const validations = () => {

    const regexFullName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!input.fullName.trim()){

      return alert('Debe llenar el campo nombre')

    }else if(!regexFullName.test(input.fullName)){

      return alert('El campo nombre solo debe contener letras y espacios')

    }
    
    if(!input.email.trim()){

      return alert('Debe llenar el campo email')

    }else if(!regexEmail.test(input.email)){

      return alert('Debe introducir una direccion de email válida')
      
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const state = validations()
    
    if(state){
      setSend(true)
    }
    
  }

  return (
    <div>
      <form action = "" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type='text' name='fullName' onChange={handleChange}/>
        <label>Email</label>
        <input type='email' name='email' onChange={handleChange}/>
        <button>Send</button>
      </form>
      {send ? <h2>Gracias {input.fullName}, te contactaremos lo antes posible vía mail</h2> : ''}
    </div>
    
  );
};

export default Form;
