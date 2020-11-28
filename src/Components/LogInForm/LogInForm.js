import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './LogInForm.scss';

export default function LogInForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;

	const emptyForm = {
		email: '',
		password: '',
	};

	const [formData, setFormData] = useState(emptyForm);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = formData;
		const user = { email, password };
		try {
			const loggedIn = await fetch(url + '/auth/login', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			});
			const response = await loggedIn.json();
			if (response.error) {
				alert(
					`An error occurred while attempting to log you in. Please try again \n${response.error}`
				);
				setFormData(emptyForm);
			} else {
				window.localStorage.setItem('token', JSON.stringify(response.token));
				window.localStorage.setItem('email', JSON.stringify(response.email));
				setGState({ ...gState, token: response.token, email: response.email });
				setFormData(emptyForm);
				props.history.push('/climblist');
			}
		} catch (error) {
			alert(`Error: ${error}. Please try again`);
			console.log(error);
			document.location.reload();
		}
	};
	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};
	return (
		<div className='log-in-page'>
			<h2>Log In</h2>
			<form onSubmit={handleSubmit} className='log-in-form'>
				<input
					type='email'
					name='email'
					placeholder='email'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					value={formData.password}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
