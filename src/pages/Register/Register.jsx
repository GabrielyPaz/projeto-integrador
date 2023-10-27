import { useState } from 'react';
import styles from './Register.module.css';
import eye from '../../assets/eye.svg';
import eyeslash from '../../assets/eye-slash.svg';

export default function Register(){

	const [form, serForm] = useState({
		nome: "",
		sobrenome: "",
		email: ""		,
		password: "",
		confirmPasswor: ""
	})

	
		const [showPasswordOne, setShowPasswordOne] = useState(false);
		const [showPasswordTwo, setShowPasswordTwo] = useState(false);

		/*
			const [fraseError, setFraseError] = useState('');
			const [textoIpunt, setTextoInput] = useState('');
		*/
		const handleClickShowPasswordOne = () => {
			setShowPasswordOne(!showPasswordOne)
		}

		const handleClickShowPasswordTwo = () => {
			setShowPasswordTwo(!showPasswordTwo)
		}

		/*
		const handleInputError1 = () => {

			setInputError(!inputError)
		}
		
		const handleInputError = (value) => {

			if(value.length < 3){
				setFraseError('* Insira no mínimo 3 caracteres!');
			} else {
				setFraseError('');
			}
			setTextoInput(value);
		}*/
		
		
	
	return (
		<>
			<form action="">

				<fieldset> MoveRental

				<div className={styles.user_input}>

					<label htmlFor="">
						Nome:
					</label>
					<div>
						<input name="nome" 
						type="text" 
						minLength={3} 
						onChange={(event) => handleChange(event.target.value)}/>
						<small>* Insira no mínimo 3 caracteres!</small>
					</div>

					<label htmlFor="">
						Sobrenome
					</label>
					<div>
						<input name="sobrenome" 
						type="text" 
						minLength={3} 
						onChange={(event) => handleChange(event.target.value)}/>
						
						<small>* Insira no mínimo 3 caracteres</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="">
						Email:
					</label>
					<div>
						<input type="email" name="email" id="email" />
						<small>* Insira um e-mail válido</small>
					</div>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="">
						Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordOne ? "password" : "text"} name="password" id="password" minLength={8}/>

						<img onClick={handleClickShowPasswordOne} 
							className={styles.eye_password_bt}
							id="imgPasswordOne" 
							src={!showPasswordOne ? eye : eyeslash}
							alt="icone olho" />
					</div>
					<small>* Sua senha precisa ter no mínimo 8 caracteres</small>
				</div>

				<div className={styles.user_input}>
					<label htmlFor="" >
						Comfirmar Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordTwo ? "password" : "text"} name="confirmPassword" id="confirmPassword" minLength={8} />
						<img onClick={handleClickShowPasswordTwo} 
							className={styles.eye_password_bt}
							id="imgPasswordTwo" 
							src={!showPasswordTwo ? eye : eyeslash}
							alt="icone olho" />
					</div>
					<small>* As senhas não correspondem</small>
					

					<div className={styles.div_button}>
						<button name="send" id="" >Cadastrar</button>
					</div>
				</div>


				</fieldset>

			</form>
			
		</>
	)
}