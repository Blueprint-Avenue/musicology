import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

export default function Musicology() {
	return (
		<Container>
			<div className="music__Body">
				{/* SideBar */}
				<Sidebar />
				<div className="body">
					{/* Navbar */}
					<Navbar />
					<div className="body__Contents">
						{/* Body */}
						<Body />
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
		background: linear-gradient(transparent, rgb(0, 0, 0, 1));
		background-color: #04293a;
		.body {
			height: 100%;
			width: 100%;
			overflow: auto;
		}
	}
`;
