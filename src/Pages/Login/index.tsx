//#region
import React, { useContext, useState, useEffect } from "react";
//#endregion
import { Container, ContainerLogin, BoxHeader, BoxBody } from './style';

import { Formik, Form, Field, useFormik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import { useHistory } from "react-router";
const schema = yup.object().shape({
  user: yup.string().required("Usuário Obrigatório"),
  pass: yup.string().required("Senha obrigatória")
})

const Login = () => {
  // const [userList, setUserList] = useState([])
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      user:'',
      pass:''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
     const data = await Axios.post('http://localhost:3002/api/auth', {
        login: values.user, 
        senha: values.pass
      })
      if(data.data.length >=1){  
        toast.success("Dados enviados com sucesso")
        history.push("/")
      }else{
        toast.error("Usuário e/ou senha incorreta")
      }
    }
  });
  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = formik
  // useEffect(()=>{
  //   Axios.get('http://localhost:3002/api/get').then((response) =>{
  //     setUserList(response.data)
  //     // console.log(userList)
  //   })
  // }, [userList])
  
  return (
    <Container>
      <ContainerLogin>
        <BoxHeader>
          <h2 className="titleHeader">SYSchool</h2>
        </BoxHeader> 
        <BoxBody>
            <form onSubmit={handleSubmit}>
              <input type="text" className="input" name="user" placeholder="Usuário" onChange={handleChange} onBlur={() => errors.user && toast.error(errors.user)}/>

              <input type="password" className="input" name="pass" placeholder="Senha" onChange={handleChange} onBlur={() => errors.pass && toast.error(errors.pass)} />
              <button className="buttonForm">Entrar</button>
            </form>
        </BoxBody>
      </ContainerLogin>
      {/* {userList.map((val)=>{
        
        return <h1>{val['LOGIN']}</h1>
      })} */}
    </Container>
  );
};
export default Login;

