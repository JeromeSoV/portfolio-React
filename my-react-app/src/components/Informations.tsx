import about from "../styles/about.module.css";

const Informations = () => {

    return (
        <section className={about.aboutSection}>
                <h1>Informations</h1>
                <h2 id="general" className={about.chapterTitle}>À propos de moi</h2>
                <div className={about.aboutDiv}>
                    <p className={about.aboutParagraph}>
                        Je m'appelle Jérôme Sauvé. Né le 03/11/2001.
                        Originaire d'Eure et Loire, j'habite actuellement à Villeneuve d'Ascq pour mes études.
                        
                        Actuellement en 2ème année de BUT Informatique, parcours Réalisation d'applications, je recherche actuellement un stage dans le développement, l'optimisation des ressources et/ou la gestion de projets informatiques.
                        
                        Ce stage devrait durer 10 semaines et s'inscrire sur la période des mois entre Avril et Juillet 2026.
                        Je serai heureux de pouvoir allonger la période de stage jusqu'au mois d'août 2026 si jamais mes résultats rencontrent les attentes de mon employeur.
                        Je suis en parallèle à la recherche d'une alternance pour ma troisième année de BUT.
                    </p>
                    <img src="/gallery/profil.jpg" alt="Photo de profil" className={about.aboutImg}/>
                </div>

                <h2 id="etudes" className={about.chapterTitle}>Parcours Universitaire</h2>
                <div className={about.aboutDiv}>
                    <p className={about.aboutParagraph}>
                        J'ai obtenu mon bac en 2019, un bac Scientifique Sciences de l'ingénieur, option Informatique.
                    Par la suite j'ai intégré un parcours ce classe préparatoire aux écoles d'ingénieur, au lycée Pothiers à Orléans.
                    J'y ai fait ma sup en MPSI et ma spé en PSI*.
                    </p>
                    <p className={about.aboutParagraph}>
                    Suite à mes concours j'ai pu intégrer l'école d'ingénieur CY Tech, à Cergy, en filière Génie Civil.
                    </p>

                    <p className={about.aboutParagraph}>Pour diverses raisons je n'ai pas pu terminer ma formation. Je possède alors des connaissance en Génie Civil d'un niveau Master 1 voire Master 2, Même si je n'ai validé qu'une Licence.</p>
                    <p className={about.aboutParagraph}>J'ai aussi pu obtenir les connaissances transverses d'un ingénieur, donc en connaissance du management, en économie et en présentation.</p>
                    <p className={about.aboutParagraph}>Aujourd'hui je suis une formation de BUT Informatique, me spécialisant dans le parcours Réalisation d'Applications. Un de mes objectifs professionnels serait de devenir Développeur de logiciels de CAO/DAO qui me permettrait d'exploiter mes connaissances du Génie Civil et mon expérience utilisateur sur de tels logiciels.</p>
                </div>

                <h2 id = "travail" className={about.chapterTitle}>Expériences Professionnelles</h2>
                <div className={about.aboutDiv}>
                    <p className={about.aboutParagraph}>Dans le cadre de ma formation d'ingénieur, j'ai eu l'occasion d'accomplir un stage au poste d'assistant de conducteur de travaux au sein de Stylique.</p>
                    <p className={about.aboutParagraph}>J'ai pu épauler un conducteur de travaux et un ingénieur Travaux dans la transformation d'étages désaffectés d'immeubles haussmaniens en bureaux modernes de type startup.</p>
                    <p className={about.aboutParagraph}>Mes missions consistaient en l'entretien de la communication entre les équipes éxécutives et les acteurs décisionnels, la préparation des rapports et des réunions hebdomadaires, ainsi que la surveillance de la conformité du chantier.</p>
                    <p className={about.aboutParagraph}>En autre expérience professionnelle, j'ai par plusieurs fois été embauché comme hôte de caisse afin de financer mes études.</p>
                    <p className={about.aboutParagraph}>Depuis Mars 2025 je suis employé au sein du hypermarché Auchan de Villeneuve d'Ascq. En période de cours je fais entre 15h et 25h à côté des cours, et suis à temps plein durant les vacances.</p>
                </div>

                <h2 id="passions" className={about.chapterTitle}>Mes centres d'intérêts</h2>
                <div className={about.aboutDiv}>
                    Étant de nature curieuse et aimant beaucoup créer, je m'intéresse à plusieurs domaines :
                    <ul>
                        <li className={about.aboutListItem}>
                            Jeux Vidéos : J'affectionne en particulier les jeux proposant des aventures solitaires immersives,
                            comme Cyberpunk 2077, Divinity : Original Sin 2 ou encore Starbound.
                        </li>
                        <li className={about.aboutListItem}>
                            Musique :  Mon intérêt tardif pour cet art fait que j'ai de l'attention pour des styles très divers de musique, basé sur ma consommation d'autres médias (jeux, séries, etc.).
                            Un de mes artistes préféré étant le groupe Mili, qui propose des chansons dans des registres et styles très rares à mon sens, bien que pas souvent accessibles.
                            Mais aussi j'écoute des artistes avec des styles et public visé différents, pouvant aller à Tame Impala, Dawid Podsiadło , Solann ou encore Swing.
                        </li>
                        <li className={about.aboutListItem}>
                            Modélisation 3D : Cela fait plusieurs mois que je m'intéresse à ce domaine et que j'apprends à utiliser Blender.
                            J'ai des projets de scène actuellement en cours même si non aboutis, dû à des contraintes de temps assez prenantes.
                        </li>
                        <li className={about.aboutListItem}>
                            Écriture : J'aime écrire, utiliser la langue française pour imaginer et décrire des histoires, des univers et des personnages.
                        </li>

                        </ul>
                    Ces trois derniers centres d'intérêt se rejoignent en un projet personnel multi-disciplinaire : la création d'un jeu de rôle basé sur l'univers de The Legend of Zelda : Breath of the Wild. Pour le résumer, il s'agit de réimaginer l'univers présenté dans le jeu à une époque antérieure au jeu, et je voudrais lui donner vie par mes compétences de modélisation, et faire plonger des joueurs dans cet univers par mes capacités d'écriture, accompagnés si possible par des créations musicales originales.
                </div>

            </section>
    );
}

export default Informations;