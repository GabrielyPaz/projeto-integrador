import { useState } from "react";
import styles from "./AdminFormulario.module.css";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { MdKeyboardArrowLeft } from "react-icons/md";


export default function AdminFormulario({ listaCidades, listaCategorias }) {

  const navigate = useNavigate();

  const [selectionCategory, setSelectedCategory] = useState("Default");
  const [selectionCity, setSelectedCity] = useState("Default");
  const [listaImagens, setListaImagens] = useState([]);
  const [listaAtributos, setListaAtributos] = useState([]);

  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    latitude: "",
    longitude: "",
  });

  const estaLogado = !!localStorage.getItem("token");
  const token = estaLogado ? localStorage.getItem("token") : null;

  const [qtdAtributo, setQtdAtributo] = useState(1);
  const [qtdImagem, setQtdImagem] = useState(5);

  const atributos = new Array(qtdAtributo).fill(null);
  const imagens = new Array(qtdImagem).fill(null);

  function addInput() {
    if (qtdAtributo <= 9) {
      setQtdAtributo(qtdAtributo + 1);
    } else {
      alert("Limite de atributos atingido");
    }
  }

  function addImagens() {
    if (qtdImagem <= 14) {
      setQtdImagem(qtdImagem + 1);
    } else {
      alert("Limite de imagens atingido");
    }
  }

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagensChange = (e, index) => {
    const { value } = e.target;
    setListaImagens((prevLista) => {
      const novaLista = [...prevLista];
      novaLista[index] = { nome: `Imagem ${index + 1}`, url: value };
      return novaLista;
    });
  };

  const handleAtributosChange = (e, index, campo) => {
    const { value } = e.target;
    setListaAtributos((prevLista) => {
      const novaLista = [...prevLista];
      novaLista[index] = { ...novaLista[index], [campo]: value };
      return novaLista;
    });
  };

  const handleForm = async () => {
    try {
      const caracterPromises = listaAtributos.map(async (atributo) => {
        const response = await /*api.post*/ ("/caracteristicas", atributo, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.id;
      });

      const listaAtributosIds = await Promise.all(caracterPromises);

      const imgsPromises = listaImagens.map(async (imagem) => {
        const response = await /*api.post*/ ("/imagens", imagem, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.id;
      });

      const listarImagensIds = await Promise.all(imgsPromises);

      const adminFormProduto = {
        nome: formData.nome,
        descricao: formData.descricao,
        latitude: formData.latitude,
        longitude: formData.longitude,
        cidadesId: selectionCity,
        categoriasId: selectionCategory,
        imagensId: listarImagensIds,
        caracteristicasProdutoId: listaAtributosIds,
      };

      await criarProduto(adminFormProduto);
    } catch (error) {
      console.log(error);
    }
  };

  const criarProduto = async (adminFormProduto) => {
    try {
      const response = await ("/produtos", adminFormProduto, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Novo Produto Criado!",
          background: `#ffffff95`,
          color: `#f0572d`,
          html: `<span style='color:  '#000' } ;'>A nova propriedade foi criada com sucesso!</span>`,
          confirmButtonColor: "#31363f",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          } else {
            navigate("/");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
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

        <form className={styles.form} onSubmit={handleForm}>
          <div className={styles.sectionGrid}>
            <div className={styles.inputInform}>
              <label htmlFor="">Nome da Propriedade</label>
              <input
                name="nome"
                type="text"
                placeholder="Nome"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputInform}>
              <label htmlFor="">Categoria</label>
              <select
                value={selectionCategory}
                onChange={handleChangeCategory}
                type="text"
                required
              >
                <option value="Default" disabled hidden>
                  {" "}
                  Categorias{" "}
                </option>
                {listaCategorias.map((item) => (
                  <option key={item.id} value={item.id}>
                    {" "}
                    {item.nome}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputInform}>
              <label htmlFor="">Endereço</label>
              <input type="text" placeholder="Endereço" required />
            </div>

            <div className={styles.inputInform}>
              <label htmlFor="">Cidade</label>
              <select
                value={selectionCity}
                onChange={handleChangeCity}
                type="text"
                required
              >
                <option value="Default" disabled hidden>
                  {" "}
                  Cidades{" "}
                </option>
                {listaCidades.map((item) => (
                  <option key={item.id} value={item.id}>
                    {" "}
                    {item.nome}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Latitude</label>
              <input
                name="latitude"
                type="text"
                placeholder="Latitude"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.input}>
              <label htmlFor="">Longitude</label>
              <input
                name="longitude"
                type="text"
                placeholder="Longitude"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.descricao}>
            <label htmlFor="">Descrição</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Descrição"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className={styles.atributos}>
            <h2>Adicionar Atributos</h2>

            {atributos.map((_, index) => (
              <div className={styles.atributosInputs} key={index}>
                <div
                  className={`${styles.atributoItem} ${styles.atributoNome}`}
                >
                  <label htmlFor="">Nome</label>
                  <input
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => handleAtributosChange(e, index, "nome")}
                  />
                </div>
                <div
                  className={`${styles.atributoItem} ${styles.atributoIcone}`}
                >
                  <label htmlFor="">Ícone</label>
                  <input
                    type="url"
                    placeholder="Url do ícone"
                    onChange={(e) => handleAtributosChange(e, index, "icone")}
                  />
                </div>

                {index === qtdAtributo - 1 && (
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
                <h3>Regras da locação</h3>

                <label htmlFor="">Descrição</label>
                <textarea
                  name=""
                  id=""
                  cols="20"
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
                  cols="20"
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
                  cols="20"
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
                <input
                  type="text"
                  placeholder="Insira uma URL"
                  onChange={(e) => handleImagensChange(e, index)}
                />

                {index === qtdImagem - 1 && (
                  <button onClick={addImagens}>+</button>
                )}
              </div>
            ))}

            <div className={styles.buttonCriar}>
              <button>Criar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

