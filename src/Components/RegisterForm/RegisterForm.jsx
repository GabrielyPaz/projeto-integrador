import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// useForm
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//yup

import styles from './RegisterForm.module.css';
import eye from '../../assets/eye.svg';
import eyeslash from '../../assets/eye-slash.svg';

export default function RegisterForm(){

	const navigate = useNavigate();

	const [showPasswordOne, setShowPasswordOne] = useState(false);
	const [showPasswordTwo, setShowPasswordTwo] = useState(false);
	const data = localStorage.getItem("registros");
	const [listaRegistro, setListaRegistro] = useState(data ? JSON.parse(data) : []);
/*
	const [formData, setFormData] = useState({
    nome: '',
    sobrenome:'',
    email: '',
    password: ''
  });*/

	const schema = Yup.object().shape({
		
		nome: Yup.string()
		.required("* Campo Obrigatório!")
		.min(3, "* Mínimo de 3 caracteres!"),

		sobrenome: Yup.string()
		.required("* Campo Obrigatório!")
		.min(3, "* Mínimo de 3 caracteres!"),

		email: Yup.string()
		.required("* Campo Obrigatório!")
		.email("* Insira um e-mail válido"),

		password: Yup.string()
		.required("* Campo Obrigatório!")
		.min(8, "* Mínimo de 8 caracteres"),

		confirmPassword: Yup.string()
		.required("* Repita a senha!")
		.oneOf([Yup.ref("password"), null], "* Senha estão diferentes!")
	})

	const { register, handleSubmit, formState, reset } = useForm({

		mode: "all",
		resolver: yupResolver(schema),
		defaultValues: {
			nome: "",
			sobrenome: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	});

	const { errors, isDirty, isValid } = formState;
	//console.log("error", errors.nome)

	const handleSubmitData = (data) => {
		console.log(data);
		const novoRegistro = [...listaRegistro, data];
		setListaRegistro(novoRegistro);
		console.log(data)

		localStorage.setItem('registros', JSON.stringify(novoRegistro));
		reset()
    alert('Cadastro realizado com sucesso!');
    navigate('/login');
	}

	//const handleChange = (e) => {
    //setFormData({ ...formData, [e.target.name]: e.target.value });
	//	console.log(formData);
 // }

	const handleClickShowPasswordOne = () => {
		setShowPasswordOne(!showPasswordOne)
	}

	const handleClickShowPasswordTwo = () => {
		setShowPasswordTwo(!showPasswordTwo)
	}		
	
	return (
		<>
			<form className={styles.form_register} 
			onSubmit={handleSubmit(handleSubmitData)}>

				<h1 className={styles.h1_register}>Cadastro</h1>

				<div className={styles.user_input}>

					<label className={styles.label_register}>
						Nome:
					</label>
					<div>
						<input className={errors.nome ? styles.input_register_error : styles.input_register} 
						name="nome" 
						type="text" 
						{...register('nome')}
						/>
						{errors.nome && <small className={styles.small_register_error}>{errors.nome.message}</small>}
					</div>

					<label className={styles.label_register}>
						Sobrenome
					</label>
					<div className={styles.user_input}>
						<input className={errors.sobrenome ? styles.input_register_error : styles.input_register}
						name="sobrenome" 
						type="text"
						{...register("sobrenome")}
						/>
						{errors.sobrenome && <small className={styles.small_register_error}>{errors.sobrenome.message}</small>}
					</div>
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register}>
						Email:
					</label>
					<div>
						<input 
						className={errors.email ? styles.input_register_error : styles.input_register}
						type="email" 
						name="email"
						id="email" 
						{...register("email")}
						/>
						{errors.email && <small className={styles.small_register_error}>{errors.email.message}</small>}
					</div>
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register}>
						Senha:
					</label>
					<div className={errors.password ? styles.divPasswordEConfirmPassword_error : styles.divPasswordEConfirmPassword}>
						<input 
						className={errors.password ? styles.input_div_error : styles.input_register}
						type={!showPasswordOne ? "password" : "text"} name="password" 
						id="password" 
						{...register("password")}
						/>

						<img onClick={handleClickShowPasswordOne} 
							className={styles.eye_password_bt}
							id="imgPasswordOne"
							src={!showPasswordOne ? eye : eyeslash}
							alt="icone olho" 
							/>
					</div>
					{errors.password && <small className={styles.small_register_error}>{errors.password.message}</small>}
				</div>

				<div className={styles.user_input}>
					<label className={styles.label_register} >
						Comfirmar Senha:
					</label>
					<div className={errors.confirmPassword ? styles.divPasswordEConfirmPassword_error : styles.divPasswordEConfirmPassword}>
						<input 
						className={errors.confirmPassword ? styles.input_div_error : styles.input_register}
						type={!showPasswordTwo ? "password" : "text"} 
						name="confirmPassword" 
						id="confirmPassword" 
						minLength={8} 
						{...register("confirmPassword")}

						/>
						<img onClick={handleClickShowPasswordTwo} 
							className={styles.eye_password_bt}
							id="imgPasswordTwo" 
							src={!showPasswordTwo ? eye : eyeslash}
							alt="icone olho" 
							/>
					</div>
					{errors.confirmPassword && <small className={styles.small_register_error}>{errors.confirmPassword.message}</small>}
					

					<div className={styles.div_button_register}>
						<button 
						className={styles.button_register} 
						name="send"
						disabled={!isDirty || !isValid}
						>Cadastrar</button>
					</div>
				</div>

				<a className={styles.link_form} href="/login">Já sou cadastrado!</a>
			</form>
			
		</>
	)
}