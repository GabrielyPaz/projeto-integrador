import { useState } from 'react';
// useForm
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//yup
import {object, ref, string} from "yup";

import styles from './Register.module.css';
import eye from '../../assets/eye.svg';
import eyeslash from '../../assets/eye-slash.svg';

export default function Register(){

	const [showPasswordOne, setShowPasswordOne] = useState(false);
	const [showPasswordTwo, setShowPasswordTwo] = useState(false);

	const schema = object({
		
		nome: string().min(3, "* Mínimo de 3 caracteres!")
		.required("* Campo Obrigatório!"),

		sobrenome: string()
		.required("* Mínimo de 3 caracteres!"),

		email: string()
		.email()
		.required("* Insira um e-mail válido"),

		password: string()
		.min(8, "* Mínimo de 8 caracteres")
		.required("* Campo Obrigatório!"),

		confirmPassword: string()
		.min(8, "* Mínimo de 8 caracteres")
		.required("* Repita a senha!")
		.oneOf([ref("password")], "* Senha estão diferentes!")
	})

	const { register, 
		handleSubmit: onSubmit, 
		watch, 
		formState: { errors } 
	} = useForm({resolver: yupResolver(schema)});

	const handleSubmit = (data) => {
		console.log(data);
	}

		const handleClickShowPasswordOne = () => {
			setShowPasswordOne(!showPasswordOne)
		}

		const handleClickShowPasswordTwo = () => {
			setShowPasswordTwo(!showPasswordTwo)
		}		
	
	return (
		<>
			<form onSubmit={onSubmit(handleSubmit)}>

				<fieldset> MoveRental

				<div className={styles.user_input}>

					<label>
						Nome:
					</label>
					<div>
						<input name="nome" 
						type="text" 
						minLength={3} 
						{...register("nome")}
						//onChange={(event) => handleChange(event.target.value)}
						/>
						<small className={styles.error}>{errors?.nome?.message}</small>
					</div>

					<label htmlFor="">
						Sobrenome
					</label>
					<div className={styles.user_input}>
						<input name="sobrenome" 
						type="text" 
						minLength={3}
						{...register("sobrenome")}
						//onChange={(event) => handleChange(event.target.value)}
						/>
						
						<small className={styles.error}>{errors?.sobrenome?.message}</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="">
						Email:
					</label>
					<div>
						<input 
						type="email" 
						name="email"
						id="email" 
						{...register("email")}
						/>
						<small className={styles.error}>{errors?.email?.message}</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="">
						Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordOne ? "password" : "text"} name="password" 
						id="password" 
						minLength={8}
						{...register("password")}
						/>

						<img onClick={handleClickShowPasswordOne} 
							className={styles.eye_password_bt}
							id="imgPasswordOne"
							src={!showPasswordOne ? eye : eyeslash}
							alt="icone olho" 
							/>
					</div>
					<small className={styles.error}>{errors?.password?.message}</small>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="" >
						Comfirmar Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordTwo ? "password" : "text"} name="confirmPassword" 
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
					<small className={styles.error}>{errors?.confirmPassword?.message}</small>
					

					<div className={styles.div_button}>
						<button name="send" id="" >Cadastrar</button>
					</div>
				</div>


				</fieldset>

			</form>
			
		</>
	)
}