import React from "react";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {useStateProvider} from "../utils/StateProvider";

export default function Navbar({navBackground}) {
	const [{userInfo}] = useStateProvider();
	return (
		<Container navBackground={navBackground}>
			<div className="search__Bar">
				<FaSearch color="#C84B31" />
				<input
					type="text"
					placeholder="Search Musicology For Your Favorite Tunes"
				/>
			</div>
			<div className="avatar">
				<a href="#">
					<CgProfile />
					<span>{userInfo?.userName}</span>
				</a>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	height: 15vh;
	position: sticky;
	top: 0;
	transition: 0.3s ease-in-out;
	background-color: ${({navBackground}) =>
		navBackground ? "rgb(22,22,22)" : "none"};
	.search__Bar {
		background-color: #346751;
		width: 40%;
		padding: 0.4rem 1rem;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 30px;
		input {
			background-color: #346751;
			outline: none;
			border: none;
			color: #ecdbba;
			height: 2rem;
			width: 100%;
			::placeholder {
				color: #ecdbba;
			}
		}
	}
	.avatar {
		background-color: #346751;
		padding: 0.3rem 0.4rem;
		padding-right: 1rem;
		border-radius: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			text-decoration: none;
			color: #ecdbba;
			font-weight: bold;
			svg {
				font-size: 1.3rem;
				background-color: #c84b31;
				padding: 0.2rem;
				border-radius: 1rem;
				color: #ecdbba;
			}
		}
	}
`;
