import React, {useEffect} from "react";
import Login from "./components/Login";
import Musicology from "./components/Musicology";
import {reducerCases} from "./utils/Contants";
import {useStateProvider} from "./utils/StateProvider";

function App() {
	const [{token}, dispatch] = useStateProvider();

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const token = hash.substring(1).split("&")[0].split("=")[1];
			dispatch({type: reducerCases.SET_TOKEN, token});
		}
	}, [token, dispatch]);

	return <div>{token ? <Musicology /> : <Login />}</div>;
}

export default App;
