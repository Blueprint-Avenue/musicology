import React from "react";
import styled from "styled-components";
import img from "../assets/img/Wu.png";
import {
	ChartBarIcon,
	ClockIcon,
	DotsHorizontalIcon,
	HomeIcon,
} from "@heroicons/react/solid";
import {FaMicrophoneAlt} from "react-icons/fa";
import {RiCompassFill} from "react-icons/ri";
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
						<HomeIcon color="#C84B31" />
					</li>
					<li>
						<ChartBarIcon />
					</li>
					<li>
						<ClockIcon />
					</li>
					<li>
						<DotsHorizontalIcon />
					</li>
				</ul>
			</div>
			<hr size="3" noshade />
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
	border-right: 3px solid #161616;
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
				height: 1.75rem;
				cursor: pointer;
				transition: 0.3s ease-in-out;
				&:hover {
					color: white;
				}
			}
		}
	}
	hr {
		border-style: none;
		border-top-style: dotted;
		border-color: #c84b31;
		border-width: 5px;
		width: 100%;
		/* margin-left: 10px; */
	}
`;
