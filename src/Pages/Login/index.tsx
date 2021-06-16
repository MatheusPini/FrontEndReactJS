import React, {useContext} from "react";
import { Container, ContainerLogin, BoxHeader, BoxBody } from './style';
import { useFormik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import { useHistory } from "react-router";
import StoreContext from '../../Components/Store/Context'
const schema = yup.object().shape({
  user: yup.string().required("Usuário Obrigatório"),
  pass: yup.string().required("Senha obrigatória")
})

const Login: React.FC = () => {
  // const [userList, setUserList] = useState([])
  const {setToken} = useContext(StoreContext)
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      user:'',
      pass:''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
     const data = await Axios.post('http://localhost:3002/users/login', {
        login: values.user, 
        senha: values.pass
    })
    if(data.data.result){  
      toast.success("Dados enviados com sucesso")
      const {token} = {token: data.data.token}
      if(token){
        setToken(token)
        return history.push("/")
      }
    }else{
      toast.error("Usuário e/ou senha incorreta")
    }
    }
  });
  const { handleChange, handleSubmit, errors } = formik
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
    </Container>
  );
};
export default Login;

