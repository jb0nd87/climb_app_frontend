import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../App';
import './ClimbList.scss';

export default function ClimbList(props) {
	const { gState, setGState } = useContext(GlobalContext);

    const [climbRouteResults, setClimbRouteResults] = useState([]);
    const [filerResults, setFilerResults] = useState([])

	const getRoutes = (routes) => {
		fetch(
			`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=#{params[:lat]}&lon=#{params[:long]}&maxDistance=50&minDiff=5.6&maxDiff=5.14&maxResults=200&key=200975930-afa020a42722ff7dca06f78999233be1`
		)
			.then((response) => response.json())
			.then((data) => {
				setClimbRouteResults(
					data.results.sort(function (a, b) {
						var nameA = a.name.toUpperCase();
						var nameB = b.name.toUpperCase();
						if (nameA < nameB) {
							return -1;
						}
						if (nameA > nameB) {
							return 1;
						}
						return 0;
					})
				);
			});
	};
	useEffect(() => {
		getRoutes();
    }, []);
    
    const handleSubmit = (input) => {
        const filterArray = climbRouteResults.filter((routes) => {
            return input === routes.name
        })
        setFilerResults(filterArray)
    }

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
						<i className='fas fa-edit'> </i>
					</button>
				</div>
			</div>
		);
	});
}
