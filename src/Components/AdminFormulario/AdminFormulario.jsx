import { useState } from "react";
import styles from "./AdminFormulario.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function AdminFormulario() {
  const [atributoQtd, setAtributoQtd] = useState(1);
  const [imagemQtd, setImagemQtd] = useState(5);

  const atributos = new Array(atributoQtd).fill(null);
  const imagens = new Array(imagemQtd).fill(null);

  function addInput() {
    if (atributoQtd <= 9) {
      setAtributoQtd(atributoQtd + 1);
    } else {
      alert("Limite de atributos atingido");
    }
  }

  function addImagens() {
    if (imagemQtd <= 14) {
      setImagemQtd(imagemQtd + 1);
    } else {
      alert("Limite de imagens atingido");
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.adminHeader}>
        <div className={styles.adminTitle}>
          <h1>Administração</h1>
        </div>

        <div className={styles.adminHeaderIcon}>
          <Link to="/" className={styles.link}>
            <MdKeyboardArrowLeft size={60} />
          </Link>
        </div>
      </div>
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

            {atributos.map((_, index) => (
              <div className={styles.atributosInputs} key={index}>
                <div
                  className={`${styles.atributoItem} ${styles.atributoNome}`}
                >
                  <label htmlFor="">Nome</label>
                  <input type="text" placeholder="Nome" />
                </div>

                <div
                  className={`${styles.atributoItem} ${styles.atributoIcone}`}
                >
                  <label htmlFor="">Ícone</label>
                  <input type="url" placeholder="Url do ícone" />
                </div>

                {index === atributoQtd - 1 && (
                  <button className={styles.atributosButton} onClick={addInput}>
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className={styles.politica}>

            <h2>Políticas do Produto</h2>

            <div className={styles.politicaProd}>
              <div className={styles.politicaItem}>

                <h3>Regras da casa</h3>

                <label htmlFor="">Descrição</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Escreva aqui"
                ></textarea>
              </div>
              <div className={styles.politicaItem}>
                <h3>Saúde e segurança</h3>
                <label htmlFor="">Descrição</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Escreva aqui"
                ></textarea>
              </div>
              <div className={styles.politicaItem}>
                <h3>Política de cancelamento</h3>
                <label htmlFor="">Descrição</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Escreva aqui"
                ></textarea>
              </div>
            </div>
          </div>

          <div className={styles.carregarImagens}>

            <h3>Carregar imagens</h3>

            {imagens.map((_, index) => (
              <div className={styles.imagensInput} key={index}>
                <input type="text" placeholder="Url da Imagem" />

                {index === imagemQtd - 1 && (
                  <button onClick={addImagens}>+</button>
                )}
              </div>
            ))}

            <div className={styles.buttonCriar}>
              <button onSubmit={handleForm}>Criar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
