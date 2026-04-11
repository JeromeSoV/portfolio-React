const Contact = () => {

    return (
        <div className="contactList">
            <a href="mailto:jerome.sauve.etu@univ-lille.fr" target="_blank" className="contactLink"><p>M'envoyer un mail.</p></a>
            <a href = "https://www.linkedin.com/in/jérôme-sauvé-19056119a/" target="_blank" className="contactLink"><p>Ma page LinkedIn</p></a>
            <a href="https://gitlab.univ-lille.fr/jerome.sauve.etu" target="_blank" className="contactLink"><p>Ma page Gitlab</p></a>
            <a href="https://github.com/JeromeSoV" target="_blank" className="contactLink"><p>Ma page Github</p></a>
        </div>
    );
}

export default Contact;