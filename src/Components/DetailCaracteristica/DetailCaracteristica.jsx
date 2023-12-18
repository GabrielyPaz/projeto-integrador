import styles from './DetailCaracteristica.module.css'

 import { AiFillCar } from 'react-icons/ai'

export default function DetailCaracteristica({ veiculo }) {
console.log(veiculo.caracteristicasCarro)
  return (
    <div className={styles.containerDescricao}>
      <h1 className={styles.titleDescrição}>
        Descrição do Veículo
      </h1>
      <p className={styles.text}> {veiculo.descricao} </p>

      <h2 className={styles.title}>O que o carro oferece?</h2>

      <div className={styles.containerGrid}>
        {veiculo.caracteristicasCarro?.map(item => (
        <div key={item.id} className={styles.gridItem}>
          <AiFillCar />
          <p> {item.nome} </p>
        </div>))}
        
        
      </div>
    </div>
  )
}
