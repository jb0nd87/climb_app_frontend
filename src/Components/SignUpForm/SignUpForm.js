import React, { useState, useContext } from 'react';
import './SignUpForm.scss';
import { GlobalContext } from '../../App';
import { Link } from 'react-router-dom';

export default function SignUpForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;

	const emptyForm = {
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formData, setFormData] = useState(emptyForm);
    const [errorMsg, setErrorMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        props.handleSignUp()
        props.history.push('/climblist')
    }

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	const login = (
		<Link className='form-btn' to='/login'>
			<span>Please Log In!</span>
		</Link>
	);

	return (
		<div className='sign-up-page'>
			<h2>Sign up</h2>
			<h3 className='error'>{errorMsg}</h3>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<input
					className='form-text-input'
					type='email'
					name='email'
					placeholder='email'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					className='form-text-input'
					type='password'
					name='password'
					placeholder='password'
					value={formData.password}
					onChange={handleChange}
				/>
				<div className='form-btn-div'>
					<input type='submit' className='form-btn' />
					{login}
				</div>
			</form>
		</div>
	);
}
