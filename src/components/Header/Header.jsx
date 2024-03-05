
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {


	return (
		<>
			<img className={styles.logo} src={logos[0]}/>
			<SelectUser />
		</>
	);
}

export default Header;