
import style from './HomePage.module.scss'
import logo from '../assets/logo.png'
const HomePage = () => {
    return (
        <div className={style.homepage}>
            <img src={logo} alt='logo-home'/>
            <h1>Localexpress</h1>
            <h2>Vos courses livrées avec le sourire</h2>
            <button>Commencer</button>
        </div>
    );
};

export default HomePage;