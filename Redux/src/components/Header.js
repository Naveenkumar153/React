import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions, logoutAction } from '../store/Auth';
const Header = () => {

  const userLoginState = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
     if(userLoginState) {
        dispatch(authActions.logout());
     }else {
        dispatch(logoutAction());
     }
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
        {   userLoginState && 
          <nav>
            <ul>
              
                  <li>
                    <a href='/'>My Products</a>
                  </li>
                  <li>
                    <a href='/'>My Sales</a>
                  </li>
              <li>
                <button onClick={logoutHandler}>{ userLoginState ? 'Logout' : 'Login' }</button>
              </li>
            </ul>
          </nav>
        }
    </header>
  );
};

export default Header;
