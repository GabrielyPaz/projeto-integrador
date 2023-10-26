//import { useContext, useState } from 'react';
//import { EyeButtonContext } from '../../contexts/EyePassword/EyePassword'
import { useState } from 'react';
import styles from './Register.module.css';
import eye from '../../assets/eye.svg';
import eyeslash from '../../assets/eye-slash.svg';

export default function Register(){

		const [showPasswordOne, setShowPasswordOne] = useState(false);
		const [showPasswordTwo, setShowPasswordTwo] = useState(false);

		const handleClickShowPasswordOne = () => {
			setShowPasswordOne(!showPasswordOne)
		}

		const handleClickShowPasswordTwo = () => {
			setShowPasswordTwo(!showPasswordTwo)
		}
	
	return (
		<>
			<form action="">
				<fieldset> MoveRental
				<div>
					<label htmlFor="">
						Nome:
					</label>
					<div>
						<input type="text" minLength={3} />
						<small>* Insira no mínimo 3 caracteres</small>
					</div>

					<label htmlFor="">
						Sobrenome
					</label>
					<div>
						<input type="text" minLength={3} />
						<small>* Insira no mínimo 3 caracteres</small>
					</div>
				</div>

				<div>
					<label htmlFor="">
						Email:
					</label>
					<div>
						<input type="email" name="email" id="email" />
						<small>* Insira um e-mail válido</small>
					</div>
				</div>

				<div>
					<label htmlFor="">
						Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordOne ? "password" : "text"} name="password" id="password" minLength={8}/>
						<img onClick={handleClickShowPasswordOne} 
							className="eye-password-bt"
							id="imgPasswordOne" 
							src={!showPasswordOne ? eye : eyeslash}
							alt="icone olho" />
					</div>
					<small>* Sua senha precisa ter no mínimo 8 caracteres</small>
				</div>

				<div>
					<label htmlFor="" >
						Comfirmar Senha:
					</label>
					<div className={styles.divPasswordEConfirmPassword}>
						<input type={!showPasswordTwo ? "password" : "text"} id="confirmPassword" minLength={8} />
						<img onClick={handleClickShowPasswordTwo} 
							className="eye-password-bt"
							id="imgPasswordTwo" 
							src={!showPasswordTwo ? eye : eyeslash}
							alt="icone olho" />
					</div>
					<small>* As senhas não correspondem</small>
					

					<div>
						<button name="send" id="" >Cadastrar</button>
					</div>
				</div>


				</fieldset>

			</form>
			

		</>
	)
}