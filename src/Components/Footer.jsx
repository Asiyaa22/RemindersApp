import React from "react";

let date = new Date();
let year = date.getFullYear();


function Footer(){
    return <div className="footer">
        <footer>
            <h5>copyRight {year}</h5>
            <h5>Made with love ❤ -Asiya</h5>
        </footer>
    </div>
}

export default Footer;
