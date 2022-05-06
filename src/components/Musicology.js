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
			<div className="music_footer">
				<Footer />
			</div>
		</Container>
	);
}

const Container = styled.div``;
