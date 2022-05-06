import React from "react";
import styled from "styled-components";
import img from "../assets/img/Wu.png";
import {IoLibrary} from "react-icons/io5";
import {MdHomeFilled, MdSearch} from "react-icons/md";
import Playlist from "./Playlist";

function Sidebar() {
	return (
		<Container>
			<div className="top__Links">
				<div className="logo">
					<img src={img} alt="Music Logo" />
				</div>
				<ul>
					<li>
						<MdHomeFilled />
						<span>Home</span>
					</li>
					<li>
						<MdSearch />
						<span>Search</span>
					</li>
					<li>
						<IoLibrary />
						<span>Your Playlists</span>
					</li>
				</ul>
			</div>
			<Playlist />
		</Container>
	);
}

export default Sidebar;

const Container = styled.div`
	background-color: #346751;
	height: 100%;
	color: #ecdbba;
	display: flex;
	flex-direction: column;
	width: 100%;
	.top__Links {
		display: flex;
		flex-direction: column;
		.logo {
			text-align: center;
			margin: 1rem 0;
			img {
				max-inline-size: 80%;
				block-size: auto;
				transform: scaleY(-1);
			}
		}
		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			li {
				display: flex;
				gap: 1rem;
				cursor: pointer;
				transition: 0.3s ease-in-out;
				&:hover {
					color: white;
				}
			}
		}
	}
`;
