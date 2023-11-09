import styles from './DetailCaracteristica.module.css';

import { AiFillCar  } from "react-icons/ai";


export default function DetailCaracteristica() {
    return (
        <div className={styles.containerDescricao}>
            <h1 className={styles.titleDescrição}>Com um design robusto e funcional</h1>
            <p className={styles.text}>A linha de veículos Pajero da Mitsubishi é conhecida por suas capacidades off-road, conforto e versatilidade.
            apresentam uma grade dianteira proeminente e distintiva, muitas vezes cromada, que contribui para a identidade visual da marca.
            Os faróis normalmente são integrados ao design da grade frontal, e a iluminação costuma ser eficiente para oferecer boa visibilidade, 
            tanto em estradas pavimentadas quanto em terrenos acidentados.
            Alguns modelos vêm com proteções inferiores na parte dianteira e traseira, bem como estribos laterais, 
            que ajudam a proteger o veículo em terrenos off-road e facilitam o acesso ao interior,  é frequentemente projetada com uma altura elevada do solo, 
            ângulos de ataque e saída favoráveis, além de para-choques que permitem melhor manobrabilidade em terrenos acidentados.
            O design costuma incluir janelas amplas para melhor visibilidade, tanto para o motorista quanto para os passageiros.
            Por dentro, o design é frequentemente orientado para o conforto e a funcionalidade, com assentos ajustáveis e espaço para carga, 
            sendo capaz de acomodar diversos tipos de necessidades e atividades.
            </p>
            
            <h2 className={styles.title}>O que o carro oferece?</h2>

            <div className={styles.containerGrid}>
                <div className={styles.gridItem}>  <AiFillCar/> Capacidade Off-Road</div>               
                <div className={styles.gridItem}>  <AiFillCar/>  Conforto e Espaço</div>
                <div className={styles.gridItem}>  <AiFillCar/> Tecnologia Avançada</div>
                <div className={styles.gridItem}>  <AiFillCar/> Segurança</div>
                <div className={styles.gridItem}>  <AiFillCar/> Desempenho Potente</div>
                <div className={styles.gridItem}> <AiFillCar/> Visibilidade</div>
                <div className={styles.gridItem}>  <AiFillCar/> Versatilidade e Adaptabilidade</div>
               
            </div>          
       
        </div>
    )
}