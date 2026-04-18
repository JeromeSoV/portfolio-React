import { Link } from "react-router-dom";
import accueil from "../styles/accueil.module.css";


const Accueil = () => {
    document.title="JérômeS - Accueil";
    return (
        <main className={accueil.appMain}>
            <div className="home homePres">
                <h2 className="title homeTitle">Bienvenue sur mon site personnel</h2>
                <img id="profil" src="/gallery/profil.jpg" alt="Photo de profil" className={accueil.homeFace}/>
                <p className="home paragraph">
                Je m'apelle Jérôme Sauvé. Actuellement étudiant en BUT Informatique, je me spécialise dans le développement d'applications.
                Je m'intéresse à plusieurs secteurs informatique, en particulier la programmation logicielle, le développement web, et la cybersécurité. Vous pourrez voir sur mon site qui font écho à ces centres d'intérêt.
                Possédant une licence en Génie Civil, je possède de plus des connaissances en études de structures et de dimensionnement du confort en bâtiment, avec une expérience utilisateur de la suite Autodesk. 
                </p>
            </div>

            <h4 className="home presLink">Sur ce site vous trouverez :</h4>
            <ul className={accueil.homeList}>
                <li className="item homeItem">Mes informations personnelles, mon parcours et mes objectifs professionnels.</li>
                <li className="item homeItem">Mes contacts et réseaux.</li>
                <li className="item homeItem">Mes projets passés, présents et futurs.</li>
            </ul>
            <section className={accueil.homeLinksContainer}>
                <Link to="/about" className={accueil.homeLink}><p>En savoir plus sur moi</p></Link>
                <Link to="/projets" className={accueil.homeLink}><p>Voir mes projets</p></Link>
                <Link to="/contact" className={accueil.homeLink}><p>Me contacter</p></Link>
            </section>

        </main>
    );
}

export default Accueil;