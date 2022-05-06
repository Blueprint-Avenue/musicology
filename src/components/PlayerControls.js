import React from "react";
import styled from "styled-components";
import {
	BsFillPlayCircleFill,
	BsFillPauseCircleFill,
	BsShuffle,
} from "react-icons/bs";
import {CgPlayTrackNext, CgPlayTrackPrev} from "react-icons/cg";
import {FiRepeat} from "react-icons/fi";
import {useStateProvider} from "../utils/StateProvider";
import axios from "axios";
import {reducerCases} from "../utils/Contants";

export default function PlayerControls() {
	const [{token, playerState}, dispatch] = useStateProvider();
	const changeTrack = async (type) => {
		await axios.post(
			`https://api.spotify.com/v1/me/player/${type}`,
			{},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			}
		);
		dispatch({type: reducerCases.SET_PLAYER_STATE, playerState: true});
		const response1 = await axios.get(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			}
		);
		if (response1.data !== "") {
			const currentPlaying = {
				id: response1.data.item.id,
				name: response1.data.item.name,
				artists: response1.data.item.artists.map((artist) => artist.name),
				image: response1.data.item.album.images[2].url,
			};
			dispatch({type: reducerCases.SET_PLAYING, currentPlaying});
		} else {
			dispatch({type: reducerCases.SET_PLAYING, currentPlaying: null});
		}
	};

	const changeState = async () => {
		const state = playerState ? "pause" : "play";
		await axios.put(
			`https://api.spotify.com/v1/me/player/${state}`,
			{},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			}
		);
		dispatch({
			type: reducerCases.SET_PLAYER_STATE,
			playerState: !playerState,
		});
	};

	return (
		<Container>
			<div className="shuffle">
				<BsShuffle />
			</div>
			<div className="previous">
				<CgPlayTrackPrev onClick={() => changeTrack("previous")} />
			</div>
			<div className="state">
				{playerState ? (
					<BsFillPauseCircleFill onClick={changeState} />
				) : (
					<BsFillPlayCircleFill onClick={changeState} />
				)}
			</div>
			<div className="next">
				<CgPlayTrackNext onClick={() => changeTrack("next")} />
			</div>
			<div className="repeat">
				<FiRepeat />
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	svg {
		color: #c84b31;
		transition: 0.2s ease-in-out;
		cursor: pointer;
		&:hover {
			color: #ecdbba;
		}
	}
	.state {
		svg {
			color: #ecdbba;
			transition: 0.2s ease-in-out;
			cursor: pointer;
			&:hover {
				color: #c84b31;
			}
		}
	}
	.previous,
	.next,
	.state {
		font-size: 2rem;
	}
`;
