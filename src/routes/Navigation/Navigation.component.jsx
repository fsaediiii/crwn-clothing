import { useContext } from "react";
import { Outlet,Link } from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {UserContext} from '../../contexts/User.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';

import  "./Navigation.styles.scss";

const Navigation = () => {
  const {currentUser,setCurrentUser}=useContext(UserContext);
  
  const signOutHandler=async()=>{
    await signOutUser();
    setCurrentUser();
  }

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
        <Link className="nav-link" to='/'>
            <CrownLogo className="logo"/>
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          <Link className="nav-link" to='/contact'>
            CONTACT
          </Link>
          {
            currentUser?<span className="nav-link" onClick={signOutHandler}>Sign Out</span>
            : <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
          }
         
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
