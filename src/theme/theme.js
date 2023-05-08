import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};
// const colors = {

// 		primary: "4458dc",
// 		secondary: "854fee",
// 		white: "#EAEEEC",

// };

const theme = extendTheme({ config, colors: { brand: { 100: "4458dc" } } });

export default theme;
