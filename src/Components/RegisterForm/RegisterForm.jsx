import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import Swal from "sweetalert2";
import styles from "./RegisterForm.module.css";
import eye from "../../assets/eye.svg";
import eyeslash from "../../assets/eye-slash.svg";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const schema = Yup.object().shape({
    nome: Yup.string().required("* Campo Obrigatório!").min(3, "* Mínimo de 3 caracteres!"),
    sobrenome: Yup.string().required("* Campo Obrigatório!").min(3, "* Mínimo de 3 caracteres!"),
    email: Yup.string().required("* Campo Obrigatório!").email("* Insira um e-mail válido"),
    senha: Yup.string().required("* Campo Obrigatório!").min(8, "* Mínimo de 8 caracteres"),
    confirmarSenha: Yup.string().required("* Repita a senha!").oneOf([Yup.ref("senha"), null], "* Senhas diferentes!"),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { errors, isDirty, isValid } = formState;

  const handleClickShowPasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const handleClickShowPasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const onSubmit = async (data) => {
    console.log(data)

    try {
      const response = await api.post('/usuarios', {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        senha: data.senha,
        // nomeFuncao: "usuario"
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
        console.log(response)

      if (response.status === 201) {
        localStorage.setItem('token', response.data.jwt);

        Swal.fire({
          title: "Cadastro realizado com sucesso!",
          background: "#ffff",
          confirmButtonColor: "#f0572d",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          } else {
            navigate("/");
          }
        });
      }
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <>
      <form
        className={styles.form_register}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.h1_register}>Cadastro</h1>

        <div className={styles.user_input}>
          <label className={styles.label_register}>Nome:</label>
          <div>
            <input
              className={
                errors.nome
                  ? styles.input_register_error
                  : styles.input_register
              }
              name="nome"
              type="text"
              onChange={(e) => handleChange(e)}
              
              {...register("nome")}
            />
            {errors.nome && (
              <small className={styles.small_register_error}>
                {errors.nome.message}
              </small>
            )}
          </div>

          <label className={styles.label_register}>Sobrenome</label>
          <div className={styles.user_input}>
            <input
              className={
                errors.sobrenome
                  ? styles.input_register_error
                  : styles.input_register
              }
              name="sobrenome"
              type="text"
              onChange={(e) => handleChange(e)}
              
              {...register("sobrenome")}
            />
            {errors.sobrenome && (
              <small className={styles.small_register_error}>
                {errors.sobrenome.message}
              </small>
            )}
          </div>
        </div>

        <div className={styles.user_input}>
          <label className={styles.label_register}>Email:</label>
          <div>
            <input
              className={
                errors.email
                  ? styles.input_register_error
                  : styles.input_register
              }
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleChange(e)}
              
              {...register("email")}
            />
            {errors.email && (
              <small className={styles.small_register_error}>
                {errors.email.message}
              </small>
            )}
          </div>
        </div>

        <div className={styles.user_input}>
          <label className={styles.label_register}>Senha:</label>
          <div
            className={
              errors.senha
                ? styles.divPasswordEConfirmPassword_error
                : styles.divPasswordEConfirmPassword
            }
          >
            <input
              className={
                errors.password ? styles.input_div_error : styles.input_register
              }
              type={!showPasswordOne ? "password" : "text"}
              name="senha"
              id="senha"
              onChange={(e) => handleChange(e)}
              
              {...register("senha")}
            />

            <img
              onClick={handleClickShowPasswordOne}
              className={styles.eye_password_bt}
              id="imgPasswordOne"
              src={!showPasswordOne ? eye : eyeslash}
              alt="icone olho"
            />
          </div>
          {errors.senha && (
            <small className={styles.small_register_error}>
              {errors.senha.message}
            </small>
          )}
        </div>

        <div className={styles.user_input}>
          <label className={styles.label_register}>Confirmar Senha:</label>
          <div
            className={
              errors.confirmarSenha
                ? styles.divPasswordEConfirmPassword_error
                : styles.divPasswordEConfirmPassword
            }
          >
            <input
              className={
                errors.confirmarSenha
                  ? styles.input_div_error
                  : styles.input_register
              }
              type={!showPasswordTwo ? "password" : "text"}
              name="confirmarSenha"
              id="confirmarSenha"
              onChange={(e) => handleChange(e)}
              minLength={8}
              
              {...register("confirmarSenha")}
            />
            <img
              onClick={handleClickShowPasswordTwo}
              className={styles.eye_password_bt}
              id="imgPasswordTwo"
              src={!showPasswordTwo ? eye : eyeslash}
              alt="icone olho"
            />
          </div>
          {errors.confirmarSenha && (
            <small className={styles.small_register_error}>
              {errors.confirmarSenha.message}
            </small>
          )}

          <div className={styles.div_button_register}>
            <button
              className={styles.button_register}
              name="send"
              disabled={!isDirty || !isValid}
            >
              Cadastrar
            </button>
          </div>
        </div>

        <a className={styles.link_form} href="/login">
          Já sou cadastrado!
        </a>
      </form>
    </>
  );
}
