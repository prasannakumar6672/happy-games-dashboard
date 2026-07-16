import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <p>

                © {year} Happi Games. All Rights Reserved.

            </p>

           

        </footer>

    );

};

export default Footer;