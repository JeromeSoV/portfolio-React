import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="appHeader">
            <div className="headerTop">
                <h1>Jérôme Sauvé</h1>
                <Link to="/">
                    <img src="../../assets/react.svg" alt="Logo personnel"></img>
                </Link>
            </div>
            <nav className="headerNavigation">
                <Link to="/">Accueil</Link>
                <Link to="/about">Informations</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/docs/Jerome_Sauve.pdf" target="_blank">Télecharger CV</Link>
            </nav>
        </header>
    );
}

export default Header;