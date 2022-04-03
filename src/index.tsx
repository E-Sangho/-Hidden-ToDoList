import React from "react";
import ReactDOM from "react-dom";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
