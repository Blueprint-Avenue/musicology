import React from "react";
import styled from "styled-components";
import img from "../assets/img/VinylLogo.png";

export default function Login() {
	const handleClick = () => {
		const clientId = "2628371e779c47f088a1b9027daac3e3";
		const redirectUrl = "http://localhost:3000";
		const apiUrl = "https://accounts.spotify.com/authorize";
		const scope = [
			"user-read-email",
			"user-read-private",
			"user-modify-playback-state",
			"user-read-playback-state",
			"user-read-currently-playing",
			"user-read-recently-played",
			"user-read-playback-position",
			"user-top-read",
		];
		window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
			" "
		)}&response_type=token&show_dialog=true`;
	};

	return (
		<Container>
			<img src={img} alt="Music Logo" />
			<button onClick={handleClick}>Connect Musicology</button>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: #041c32;
	img {
		height: 50vh;
	}
	button {
		padding: 1rem 5rem;
		border-radius: 5rem;
		border: none;
		background-color: #f32424;
		color: #f2f2f2;
		font-size: 1.4rem;
		cursor: pointer;
		:hover {
			background-color: #f2f2f2;
			color: #f32424;
			transition: ease-in-out;
		}
	}
`;
