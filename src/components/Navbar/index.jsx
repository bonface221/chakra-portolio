import { Box, Flex, Text, HStack } from "@chakra-ui/react";

function Navbar() {
	return (
		<Box as="header" w="100%" py={5} bg="#171923">
			<Flex
				justify="space-between"
				mx={{ base: "2%", md: "10%", lg: "13%", xl: "15%" }}
				fontSize="20px"
			>
				<Text>Logo</Text>

				<HStack spacing={7} justify="flex-end" width="60%">
					<Text>Home</Text>
					<Text>About</Text>
					<Text>Services</Text>
					<Text>Projects</Text>
					<Text>Contact</Text>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Navbar;
