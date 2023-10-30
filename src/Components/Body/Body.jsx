import styles from "./Body.module.css";
import SearchTemplate from "../SearchTemplate/SearchTemplate";

function Body() {

    return (
    <>
        <body className={styles.body}>
           <SearchTemplate/>
             <p>Isso vai ser um dia o body</p>

        </body>
       
    </>
    )

}

export default Body