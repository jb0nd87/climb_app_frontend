import React, { useState, createContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ClimbList from './Components/ClimbList/ClimbList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import ClimbListForm from './Components/ClimbList/ClimbList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
// import User from './Components/User/User'

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		url: 'https://climbtimeappjgb.herokuapp.com',
		token: null,
		email: null,
	});

	const [climbList, setClimbList] = useState([]);

	const [selectedItem, setSelectedItem] = useState();

	const selectItem = (item) => {
		console.log('selecteditem', item);
		setSelectedItem(item);
	};

	const emptyClimbListItem = {
		name: '',
		description: '',
	};

	const handleCreate = async (newItem) => {
		try {
			const climbList = await fetch(gState.url + '/climblist/', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `bearer ${gState.token}`,
				},
				body: JSON.stringify(newItem),
			});
			const response = await climbList.json();
			console.log('newItem: ', response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLike = async (climbListItem) => {
		try {
			climbListItem.isLiked = !climbListItem.isLiked;

			const toggledLikeItem = await fetch(
				gState.url + '/climblist/' + climbListItem._id,
				{
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
					body: JSON.stringify(climbListItem),
				}
			);
			const response = await toggledLikeItem.json();
			getClimbList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (climbListItem) => {
		try {
			const deletedItem = await fetch(
				gState.url + '/climblist/' + climbListItem._id,
				{
					method: 'delete',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
				}
			);
			const response = await deletedItem.json();
			getClimbList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (updatedItem) => {
		try {
			const updatedItemList = await fetch(
				gState.url + '/climblist/' + updatedItem._id,
				{
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
					body: JSON.stringify(updatedItem),
				}
			);
			const response = await updatedItemList.json();
			getClimbList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const getClimbList = async (token) => {
		try {
			const response = await fetch(gState.url + '/climblist/', {
				method: 'get',
				headers: {
					Authorization: `bearer ${token}`,
				},
			});
			const json = await response.json();
			let likes = [];
			for (let i of json) {
				if (i.isLiked === true) {
					likes.push(i);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = JSON.parse(window.localStorage.getItem('token'));
		const email = JSON.parse(window.localStorage.getItem('email'));
		if (token && email) {
			setGState({ ...gState, token: token, email: email });
			getClimbList(token);
		}
	}, []);

	return (
		<GlobalContext.Provider value={{ gState, setGState }}>
			<div className='App'>
				<header>
					<Route render={(rp) => <Header {...rp} />} />
				</header>
				<main>
					<Switch>
						<Route exact path='/'>
							<h1 id='home-logo'></h1>
							<h2 className='motto'>
								Climb Time!<span className='blink_me1'>.</span> go from Gumby to
								Pro in no time!
							</h2>
							<hr></hr>
							<h4>
								Climb Time! The app for climbers of all levels to have fun and
								explore the world we live in! {}
							</h4>
							<h4 id='call-to-action'>Sign up/sign in!</h4>
						</Route>
						<Route
							path='/climblist'
							render={(rp) => {
								return (
									<>
										<ClimbList
											{...rp}
											climbList={climbList}
											handleLike={handleLike}
											handleDelete={handleDelete}
											selectItem={selectItem}
										/>
									</>
								);
							}}
						/>
						<Route
							path='/climblistform'
							render={(rp) => {
								return (
									<ClimbListForm
										{...rp}
										item={emptyClimbListItem}
										climbList={climbList}
										setClimbList={setClimbList}
										handleSubmit={handleCreate}
										label='Create New Item'
									/>
								);
							}}
						/>
						<Route
							exact
							path='/editform'
							render={(rp) => {
								return (
									<ClimbListForm
										{...rp}
										item={selectedItem}
										handleSubmit={handleUpdate}
										label='Update Item'
									/>
								);
							}}
						/>
						<Route
							path='/signup'
							render={(rp) => (
								<>
									<SignUpForm {...rp} />
								</>
							)}
						/>
						<Route
							path='/login'
							render={(rp) => (
								<>
									<LogInForm {...rp} />
								</>
							)}
						/>
						<Route path='/about'>
								<About />
						</Route>
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
