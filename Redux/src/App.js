import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
function App() {

  const userLoginState = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header/>
       { !userLoginState && <Auth /> }
       { userLoginState && <UserProfile /> }
       { userLoginState && <Counter /> }
    </>
  );
}

export default App;
