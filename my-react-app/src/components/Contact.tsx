import contact from "../styles/contact.module.css";

const Contact = () => {
    document.title="JérômeS - Contact";
    return (
        <main className={contact.contactMain}>
            <a href="mailto:jerome.sauve.etu@univ-lille.fr" target="_blank" className={contact.contactLink}><p>M'envoyer un mail.</p></a>
            <a href = "https://www.linkedin.com/in/jérôme-sauvé-19056119a/" target="_blank" className={contact.contactLink}><p>Ma page LinkedIn</p></a>
            <a href="https://gitlab.univ-lille.fr/jerome.sauve.etu" target="_blank" className={contact.contactLink}><p>Ma page Gitlab</p></a>
            <a href="https://github.com/JeromeSoV" target="_blank" className={contact.contactLink}><p>Ma page Github</p></a>
        </main>
    );
}

export default Contact;