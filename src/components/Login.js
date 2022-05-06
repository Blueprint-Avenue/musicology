import React from "react";
import styled from "styled-components";
import img from "../assets/img/Wu.png";

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
	background-color: #346751;
	img {
		height: 50vh;
		transform: scaleY(-1);
		animation: pulse-white 2s infinite;
		@keyframes pulse-white {
			0% {
				transform: scale(0.95);
			}

			70% {
				transform: scale(1);
			}

			100% {
				transform: scale(0.95);
			}
		}
	}
	button {
		padding: 1rem 5rem;
		border-radius: 5rem;
		border: none;
		background-color: #c84b31;
		color: #ecdbba;
		font-size: 1.4rem;
		cursor: pointer;
		margin-top: 20px;
		:hover {
			background-color: #ecdbba;
			color: #346751;
			transition: ease-in-out;
		}
	}
`;
