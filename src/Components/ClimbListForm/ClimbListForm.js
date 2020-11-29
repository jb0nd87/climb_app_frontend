import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './ClimbListForm.scss';

export default function ClimbListForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;
	const { climbList, setClimbList } = props;

	const [formData, setFormData] = useState(props.item);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, description } = formData;
		const { email } = gState;
		const newItem = { ...formData, name, description, email };
		props.handleSubmit(newItem);
		console.log('handleSubmit newItem', newItem);
		props.history.push('/climblist');
	};
	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className='climblist-form-page'>
			<div className='climblist-form'>
				<h2>Add an item</h2>
				<form onSubmit={handleSubmit}>
					<input
						className='form-text-input'
						type='text'
						name='name'
						value={formData.name}
						placeholder='Name'
						onChange={handleChange}
					/>
					<input
						className='form-text-input'
						type='text'
						name='description'
						value={formData.description}
						placeholder='Description'
						onChange={handleChange}
					/>
					<input type='submit' className='form-btn' value={props.label} />
				</form>
			</div>
		</div>
	);
}
