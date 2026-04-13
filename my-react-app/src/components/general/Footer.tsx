import footer from "../../styles/footer.module.css";

const Footer = () => {

    return (
        <footer className={footer.appFooter}>
            <section className={footer.footerSection}>Informations
                <p className="footerP">Site créé en Avril 2026 par Jérôme Sauvé.
                    Pages en React, TypeScript.
                </p>
            </section>
        </footer>
    );
}

export default Footer;