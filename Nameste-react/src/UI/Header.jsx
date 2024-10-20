
import styles from './Header.module.css';

export default function Header() {
  return (
 
    <header className={styles.header}>
        <div className={styles.container}>
            <img className={styles.logo} src="https://www.cdnlogo.com/logos/s/4/swiggy.svg" alt="logo" height={"50px"} width={"100px"}/>
        </div>
        <div className={styles['nav-items']}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </header>
  )
};
