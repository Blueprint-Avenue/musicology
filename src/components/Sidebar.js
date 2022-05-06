import React from "react";
import styled from "styled-components";

function Sidebar() {
	return <Container></Container>;
}

export default Sidebar;

const Container = styled.div`
	background-color: #041c32;
	background-color: #041c32;
	opacity: 1;
	background-image: repeating-radial-gradient(
			circle at circle left,
			transparent 0,
			#041c32 100px
		),
		repeating-linear-gradient(#041c3255, #04293a);
`;
