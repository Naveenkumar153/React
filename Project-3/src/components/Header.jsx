import logo from '../assets/logo.png';
import header  from './Header.module.css';
export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-16'>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={header.para}>A community of artists and art-lovers.</p>
    </header>
  );
}
