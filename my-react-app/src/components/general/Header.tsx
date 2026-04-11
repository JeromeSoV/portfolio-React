import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="appHeader">
            <div className="headerTop">
                <h1 className="title headerTitle">Jérôme Sauvé</h1>
                <Link to="/">
                    <img src="../../assets/react.svg" alt="Logo personnel" className="logo headerLogo"></img>
                </Link>
            </div>
            <nav className="headerNavigation">
                <Link to="/" className="navLink">Accueil</Link>
                <Link to="/about" className="navLink">Informations</Link>
                <Link to="/projets" className="navLink">Projets</Link>
                <Link to="/contact" className="navLink">Contact</Link>
                <Link to="/docs/Jerome_Sauve.pdf" target="_blank" className="navLink">Télecharger CV</Link>
            </nav>
        </header>
    );
}

export default Header;