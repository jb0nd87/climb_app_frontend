import React, { useContext } from 'react';
import { GlobalContext } from '../../App';
import './ClimbList.scss';

export default function ClimbList(props) {
	const { gState, setGState } = useContext(GlobalContext);

	const climbList = props.climbList.map((item, index) => {
		return (
			<div className='list' key={index}>
				<div className='item-info'>
					<p className='name'></p>
					<p className='description'></p>
				</div>
				<div className='item-btns'>
					<button
						className='edit'
						onClick={() => {
							props.selectItem(item);
							props.history.push('/editform');
						}}>
						<i class='fas fa-edit'> </i>
					</button>
				</div>
			</div>
		);
	});
}
