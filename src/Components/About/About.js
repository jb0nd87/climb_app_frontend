import React from 'react';
import './About.scss';

export default function About() {
	return (
		<div className='about'>
			<section className='container'>
				<div id='Jaime' className='me'>
					<div className='pic'>
						<img src='https://res.cloudinary.com/dv01780vo/image/upload/v1604070046/received_2893661924081693_2_ysiho9.jpg' />
					</div>
					<span className='about'>Jaime</span>
					<p>
						As a Software Developer and 3D artist, I focus on the user
						experience to dive deep into the deatils in order to help them
						achieve their dreams for the applications I build to ensure a
						dynamic experience full of clean code.
					</p>
				</div>
			</section>
		</div>
	);
}
