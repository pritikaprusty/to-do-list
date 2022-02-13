import React from "react";

function Footer() {
    const year=new Date().getFullYear();
    return <footer>
        <p><em><strong><b>Copyright</b></strong></em>&copy; {year}</p>
    </footer> ;
    }
    export default Footer;