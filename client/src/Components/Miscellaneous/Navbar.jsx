import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { FiList, FiPlus, FiLogOut } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      bg="white"
      py={4}
      position="fixed"
      left={0}
      top={0}
      h="100vh"
      width="5%"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      display={{ base: "none", md: "block" }}
      margin-left="5%"
    >
      <Flex
        direction="column"
        alignItems="center"
        color="black"
        padding="1rem"
        justifyContent="space-evenly"
        h="40vh"
        w="40%"
        marginLeft="35%"
        marginTop="8rem"
      >
        <Link to="/dashboard">
          <IconButton
            aria-label="Dashboard"
            icon={<Icon as={AiOutlineDashboard} />}
            variant="ghost"
            fontSize="4xl"
            padding={2}
            _hover={{ color: "#1278d5" }}
          />
        </Link>
        <Link to="/list">
          <IconButton
            aria-label="Listing"
            icon={<Icon as={FiList} />}
            variant="ghost"
            fontSize="4xl"
            _hover={{ color: "#1278d5" }}
          />
        </Link>
        <Link to="/project">
          <IconButton
            aria-label="Create Project"
            icon={<Icon as={FiPlus} />}
            variant="ghost"
            fontSize="4xl"
            _hover={{ color: "#1278d5" }}
          />
        </Link>
      </Flex>
      <Link to="/">
        <IconButton
          aria-label="Logout"
          icon={<Icon as={FiLogOut} />}
          variant="ghost"
          fontSize="3xl"
          marginLeft="35%"
          mt="14rem"
          _hover={{ color: "#1278d5" }}
        />
      </Link>
    </Box>
  );
}

export default Navbar;
