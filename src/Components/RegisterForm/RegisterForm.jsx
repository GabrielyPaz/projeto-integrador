import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// useForm
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//yup
import {object, ref, string} from "yup";

import styles from './RegisterForm.module.css';
import eye from '../../assets/eye.svg';
import eyeslash from '../../assets/eye-slash.svg';

export default function RegisterForm(){

	const navigate = useNavigate();

	const [showPasswordOne, setShowPasswordOne] = useState(false);
	const [showPasswordTwo, setShowPasswordTwo] = useState(false);
	const data = localStorage.getItem("registros");
	const [listaRegistro, setListaRegistro] = useState(data ? JSON.parse(data) : []);

	const [formData, setFormData] = useState({
    nome: '',
    sobrenome:'',
    email: '',
    password: '',
  });

	const schema = object({
		
		nome: string()
		.required("* Campo Obrigatório!")
		.min(3, "* Mínimo de 3 caracteres!"),

		sobrenome: string()
		.required("* Campo Obrigatório!")
		.min(3, "* Mínimo de 3 caracteres!"),

		email: string()
		.required("* Campo Obrigatório!")
		.email("* Insira um e-mail válido"),

		password: string()
		.required("* Campo Obrigatório!")
		.min(8, "* Mínimo de 8 caracteres"),

		confirmPassword: string()
		.required("* Repita a senha!")
		.min(8, "* Mínimo de 8 caracteres")
		.oneOf([ref("password")], "* Senha estão diferentes!")
	})

	const { register, 
		handleSubmit: onSubmit,
		watch, 
		formState: { errors } 
	} = useForm({resolver: yupResolver(schema)});


	const handleSubmit = (data) => {
		console.log(data);
		const novoRegistro = [...listaRegistro, formData];
		setListaRegistro(novoRegistro);

		localStorage.setItem('registros', JSON.stringify(novoRegistro));
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
	}

	const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData);
  }

	const handleClickShowPasswordOne = () => {
		setShowPasswordOne(!showPasswordOne)
	}

	const handleClickShowPasswordTwo = () => {
		setShowPasswordTwo(!showPasswordTwo)
	}		
	
	return (
		<>
			<form className={styles.form_register} onSubmit={onSubmit(handleSubmit)}>

				<h1 className={styles.h1_register}>Cadastro</h1>

				<div className={styles.user_input}>

					<label className={styles.label_register}>
						Nome:
					</label>
					<div>
						<input className={styles.input_register} name="nome" 
						type="text" 
						minLength={3}
						{...register("nome")}
						onChange={handleChange}
						/>
						<small className={styles.small_register_error}>{errors?.nome?.message}</small>
					</div>

					<label className={styles.label_register}>
						Sobrenome
					</label>
					<div className={styles.user_input}>
						<input className={styles.input_register} 
						name="sobrenome" 
						type="text" 
						minLength={3}
						{...register("sobrenome")}
						onChange={handleChange}
						/>
						
						<small className={styles.small_register_error}>{errors?.sobrenome?.message}</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register}>
						Email:
					</label>
					<div>
						<input 
						className={styles.input_register}
						type="email" 
						name="email"
						id="email" 
						{...register("email")}
						onChange={handleChange}
						/>
						<small className={styles.small_register_error}>{errors?.email?.message}</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register}>
						Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input className={styles.input_register}
						type={!showPasswordOne ? "password" : "text"} name="password" 
						id="password" 
						minLength={8}
						{...register("password")}
						onChange={handleChange}
						/>

						<img onClick={handleClickShowPasswordOne} 
							className={styles.eye_password_bt}
							id="imgPasswordOne"
							src={!showPasswordOne ? eye : eyeslash}
							alt="icone olho" 
							/>
					</div>
					<small className={styles.small_register_error}>{errors?.password?.message}</small>
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register} >
						Comfirmar Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input 
						className={styles.input_register}
						type={!showPasswordTwo ? "password" : "text"} 
						name="confirmPassword" 
						id="confirmPassword" 
						minLength={8} 
						{...register("confirmPassword")}
						onChange={handleChange}

						/>
						<img onClick={handleClickShowPasswordTwo} 
							className={styles.eye_password_bt}
							id="imgPasswordTwo" 
							src={!showPasswordTwo ? eye : eyeslash}
							alt="icone olho" 
							/>
					</div>
					<small className={styles.small_register_error}>{errors?.confirmPassword?.message}</small>
					

					<div>
						<button className={styles.button_register} name="send">Cadastrar</button>
					</div>
				</div>

				<a className={styles.link_form} href="/login">Já sou cadastrado!</a>
			</form>
			
		</>
	)
}