import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import {useEffect} from 'react'

const SignIn = () => {
  const logGoogleUser=async()=>{
    const {user} = await signInWithGooglePopup();
    console.log("response",user)
    const userDocRef=await createUserDocumentFromAuth(user)
  }
  useEffect(()=>{
  },[])
  return (
    <div>
        sign in
        <button onClick={logGoogleUser}>sign</button>
    </div>
  );
};

export default SignIn;
