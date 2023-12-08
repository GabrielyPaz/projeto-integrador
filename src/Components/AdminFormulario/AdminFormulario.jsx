import styles from './AdminFormulario.module.css'

export default function AdminFormulario() {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.formAdminTitulo}>Criar Propriedade</h1>

                <form className={styles.form}>
                    <div className={styles.sectionGrid}>
                        <div className={styles.inputInform}>
                            <label htmlFor="">Nome da Propriedade</label>
                            <input type="text" />
                        </div>

                        <div className={styles.inputInform}>
                            <label htmlFor="">Categoria</label>
                            <input type="text" />
                        </div>

                        <div className={styles.inputInform}>
                            <label htmlFor="">Endereço</label>
                            <input type="text" />
                        </div>

                        <div className={styles.inputInform}>
                            <label htmlFor="">Cidade</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.descricao}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className={styles.atributos}>
                        <h2>Adicionar Atributos</h2>

                        <div className={styles.atributosInputs}>
                            <div className={`${styles.atributoItem} ${styles.atributoNome}`}>
                                <label htmlFor="">Nome</label>
                                <input type="text" />
                            </div>

                            <div className={`${styles.atributoItem} ${styles.atributoIcone}`}>
                                <label htmlFor="">Ícone</label>
                                <input type="url" />
                            </div>

                            <button className={styles.atributosButton}>+</button>
                        </div>
                    </div>

                    <div className={styles.politica}>
                        <h2>Políticas do Produto</h2>
                        <div className={styles.politicaProd}>
                            <div className={styles.politicaItem}>
                                <h3>Regras da casa</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                            <div className={styles.politicaItem}>
                                <h3>Saúde e segurança</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                            <div className={styles.politicaItem}>
                                <h3>Política de cancelamento</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.carregarImagens}>
                        <h3>Carregar imagens</h3>

                        <div className={styles.imagensInput}>
                            <input type="text" />
                            <button>+</button>
                        </div>
                    </div>

                    <div className={styles.buttonCriar}>
                        <button>Criar</button>                        
                    </div>
                </form>
            </div>
        </>
    )
}