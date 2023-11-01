import styles from "./Footer.module.css";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter} from "react-icons/si";

const Footer = () => {
    return (
    <>
        <footer className={styles.footer}>
        
        <h4 className={styles.footerText}> © 2023 Digital Cars</h4>

        <div>
                        <ul className={styles.lista}>
                              <li>
                                <SiFacebook size={22}/>
                            </li>
                            <li>
                                <SiInstagram size={22}/>
                            </li>
                            <li>
                                <SiLinkedin size={22}/>
                            </li>
                            <li>
                                <SiTwitter size={22}/>
                            </li>
                        </ul>
                    </div>

        </footer>
       
    </>
    )

}

export default Footer