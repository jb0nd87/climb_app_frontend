import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './LogOutBtn.scss';
import { GlobalContext } from '../../App';

export default function LogOutBtn() {
	const { gState, setGState } = useContext(GlobalContext);

	return (
		<Link>
			<button
				className='nav-btn'
				onClick={() => {
					window.localStorage.removeItem('token');
					window.localStorage.removeItem('email');
					setGState({ ...gState, token: null, email: null });
				}}>
				Log out
			</button>
		</Link>
	);
}
