import React, {useState,useContext} from 'react';
import FirebaseContext from "../context/firebase"
import { Form } from "../Components"
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { useHistory} from "react-router-dom"
import * as ROUTES from "../constants/routes"

const SignIn = () => {
	const  { firebase }=useContext(FirebaseContext)
	const history=useHistory();
	const [password, setpassword] = useState('')
	const [email, setemail] = useState('')
	const [error, seterror] = useState('')
	const handleSubmit=(e)=>{
		e.preventDefault();
	    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setemail('');
        setpassword('');
        seterror(error.message);
      });
  };
		
		
	
	const IsInValid=email ===''||password===''

	
	return (
		<>
			
			<HeaderContainer >
			<Form>
				<Form.Title>Sign In</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}
				<Form.Base onSubmit={handleSubmit} method="POST">
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
  New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
</Form.Text>
<Form.TextSmall>
  This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
</Form.TextSmall>

			</Form>
			</HeaderContainer >
			<FooterContainer />
		</>
	);
};

export default SignIn;
