import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import {useStateProvider} from "../utils/StateProvider";
import axios from "axios";
import {reducerCases} from "../utils/Contants";

export default function Musicology() {
	const [{token}, dispatch] = useStateProvider();
	const bodyRef = useRef();
	const [navBackground, setNavBackground] = useState(false);
	const [headerBackground, setHeaderBackground] = useState(false);

	const bodyScrolled = () => {
		bodyRef.current.scrollTop >= 30
			? setNavBackground(true)
			: setNavBackground(false);
		bodyRef.current.scrollTop >= 268
			? setHeaderBackground(true)
			: setHeaderBackground(false);
	};

	useEffect(() => {
		const getUserInfo = async () => {
			const {data} = await axios.get("https://api.spotify.com/v1/me", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const userInfo = {
				userId: data.id,
				userName: data.display_name,
			};
			dispatch({type: reducerCases.SET_USER, userInfo});
		};
		getUserInfo();
	}, [dispatch, token]);

	return (
		<Container>
			<div className="music__Body">
				{/* SideBar */}
				<Sidebar />
				<div className="body" ref={bodyRef} onScroll={bodyScrolled}>
					{/* Navbar */}
					<Navbar navBackground={navBackground} />
					<div className="body__Contents" ref={bodyRef} onScroll={bodyScrolled}>
						{/* Body */}
						<Body headerBackground={headerBackground} />
					</div>
				</div>
			</div>
			<div className="music__footer">
				<Footer />
			</div>
		</Container>
	);
}

const Container = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: 85vh 15vh;
	.music__Body {
		display: grid;
		grid-template-columns: 15vw 85vw;
		height: 100%;
		width: 100%;
		background-color: #c84b31;
		.body {
			height: 100%;
			width: 100%;
			overflow: auto;
		}
	}
`;
