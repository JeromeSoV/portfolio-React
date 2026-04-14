import {Link, NavLink,type NavLinkRenderProps} from "react-router-dom";
import header from "../../styles/header.module.css";


const navLinkStyle = ({ isActive }: NavLinkRenderProps) =>
    isActive ? `${header.navLink} ${header.currentPage}` : header.navLink;

const Header = () => {

    return (
        <header className={header.appHeader}>
            <div className={header.headerTop}>
                <h1 className={header.headerTitle}>Jérôme Sauvé</h1>
                <Link to="/">
                    <img src="/gallery/icon.svg" alt="Logo personnel" className={header.headerLogo}></img>
                </Link>
            </div>
            <nav className={header.headerNavigation}>
                <NavLink to="/" className={navLinkStyle}>Accueil</NavLink>
                <NavLink to="/about" className={navLinkStyle}>Informations</NavLink>
                <NavLink to="/projets" className={navLinkStyle}>Projets</NavLink>
                <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
                <a href="/docs/Jerome_SAUVE_CV.pdf" target="_blank" className={header.navLink}>Télecharger CV</a>
            </nav>
        </header>
    );
}

export default Header;