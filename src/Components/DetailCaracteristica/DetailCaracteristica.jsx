import styles from './DetailCaracteristica.module.css';

import { AiFillCar  } from "react-icons/ai";


export default function DetailCaracteristica( {veiculo} ) {
    return (
        <div className={styles.containerDescricao}>
            <h1 className={styles.titleDescrição}>Com um design robusto e funcional</h1>
            <p className={styles.text}> {veiculo.description} </p>
            
            <h2 className={styles.title}>O que o carro oferece?</h2>

            <div className={styles.containerGrid}>
                <div className={styles.gridItem}>  
                    <AiFillCar/> 
                    <p>Capacidade Off-Road</p>
                </div>               
                <div className={styles.gridItem}>  
                    <AiFillCar/> 
                    <p>Conforto e Espaço</p>
                </div>
                <div className={styles.gridItem}>  
                    <AiFillCar/> 
                    <p>Tecnologia Avançada</p>
                </div>
                <div className={styles.gridItem}>  
                    <AiFillCar/> 
                    <p>Segurança</p>
                </div>
                <div className={styles.gridItem}>  
                    <AiFillCar/> 
                    <p>Desempenho Potente</p>
                </div>
                <div className={styles.gridItem}>
                    <AiFillCar/> 
                    <p>Visibilidade</p>
                </div>
                <div className={styles.gridItem}> 
                    <AiFillCar/> 
                    <p>Versatilidade e Adaptabilidade</p>
                </div>
            </div>          

        </div>
    )
}