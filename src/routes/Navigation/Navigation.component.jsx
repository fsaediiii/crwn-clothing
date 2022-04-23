import { Outlet,Link } from "react-router-dom";
import  "./Navigation.styles.scss";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
const Navigation = () => {
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
          <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
