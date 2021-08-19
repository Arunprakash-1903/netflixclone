import {React,useContext,useState} from 'react'
import * as ROUTES from "../constants/routes"
import FirebaseContext from "../context/firebase"
import {Form} from "../Components"
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { useHistory} from "react-router-dom"
function SignUp() {
const history=useHistory();
const  { firebase }=useContext(FirebaseContext)   
const [firstName, setfirstName] = useState("")
const [email, setemail] = useState("");
const [password, setpassword] = useState("")
const [error, seterror] = useState("")
const handleSubmit=(e)=>{
    e.preventDefault();
    return firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((results)=>results.user.updateProfile({
                displayName:firstName,
                photoURL:Math.floor(Math.random()*5) +1,
              
            })).then(() => {
                history.push(ROUTES.BROWSE);
              }).catch((error)=>{
                  setemail("")
                  setpassword("")
                  setfirstName("")
                  seterror(error.message)
              })
  
};

const IsInValid=email ===''||password===''
    return (
    <>
        <HeaderContainer >
        <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
            placeholder="firstName"
            value={firstName}
            onChange={(e)=>setfirstName(e.target.value)}
            
            />
             <Form.Input
            placeholder="Email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            
            />
            <Form.Input
            placeholder="Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            type="password"
            
            />
            <Form.Submit disabled={IsInValid} type="submit">
                Submit
            </Form.Submit>	
        

        </Form.Base>
        
<Form.Text>
Already a user ? <Form.Link to={ROUTES.SIGN_IN}>Sign up now.</Form.Link>
</Form.Text>
<Form.TextSmall>
This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
</Form.TextSmall>

    </Form>
    </HeaderContainer>
    <FooterContainer />
      
    </>
    )
}

export default SignUp
