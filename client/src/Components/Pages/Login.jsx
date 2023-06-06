import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [email, setEmail] = useState(""); // State to store the email input value
  const [password, setPassword] = useState(""); // State to store the password input value
  const [emailError, setEmailError] = useState(""); // State to store the email validation error
  const [passwordError, setPasswordError] = useState(""); // State to store the password validation error
  const [errorMessage, setErrorMessage] = useState(""); // State to store the login error message
  const navigate = useNavigate(); // Hook to navigate to a different route

  const handlePasswordVisibility = () => {
    // Toggle the password visibility state
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");

    if (!email) {
      // Set email validation error if email is empty
      setEmailError("Email is required");
    }
    if (!password) {
      // Set password validation error if password is empty
      setPasswordError("Password is required");
    }

    try {
      const response = await axios.post("https://perfect-skirt-toad.cyclic.app/api/login", {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        //alert("Successfully logged in"); // Show success message if login is successful
        // Navigate to the dashboard route
        navigate("/dashboard");
      } else {
        // Set login error message if response status is not 200
        setErrorMessage("Enter your email and password");
      }
    } catch (error) {
      // Set login error message based on the error response
      setErrorMessage(error.response.data.error);
    }
  };

  const handleEmailChange = (event) => {
    // Update the email state based on the input change
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // Update the password state based on the input change
    setPassword(event.target.value);
  };

  return (
    <Box className="background">
      <Box className="logo"></Box>
      <Text textAlign="center" color="white" fontSize="xl">
        Online Project Manager
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        p={4} // Add padding for mobile view
      >
        <Box
          marginTop={["4rem", "2rem"]}
          backgroundColor={["transparent", "white"]}
          width={["100%", "400px"]} // Set width to 100% for small screens, 450px for larger screens
          p={["1", "8"]}
          borderWidth={["0", "1"]}
          borderRadius="md"
          // boxShadow="lg"
          boxShadow={["node", "lg"]}
        >
          <Text
            textAlign={["start", "center"]}
            marginBottom="2rem"
            fontSize={["30px", "20px"]}
          >
            Login to get started
          </Text>
          <FormControl id="email" mb={4}>
            <FormLabel fontSize={["20px", "md"]}>Email</FormLabel>
            <Input
              placeholder="Email"
              mb="2"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!emailError}
            />
            {emailError && (
              <Text fontSize={["md", "sm"]} color="red.500">
                {emailError}
              </Text>
            )}
          </FormControl>

          <FormControl id="password" mb={4}>
            <FormLabel fontSize={["20px", "md"]}>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                mb="2"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!passwordError}
              />
              <InputRightElement width="3rem">
                <Button
                  fontSize={["20px", "md"]}
                  h="1.5rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                >
                  {!showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {passwordError && (
              <Text color="red.500" fontSize={["md", "sm"]} w="50%">
                {passwordError}
              </Text>
            )}
            <Button
              color="#63B3ED"
              variant="link"
              marginLeft={["auto", "70%"]} // Align to the right for small screens, 70% for larger screens
              fontSize={["md", "sm"]}
            >
              Forgot Password?
            </Button>
          </FormControl>

          <Button
            marginTop="1rem"
            colorScheme="blue"
            onClick={handleLogin}
            borderRadius="2rem"
            width={["90%", "50%"]}
            marginLeft={["5%", "25%"]}
            fontSize={["20px", "md"]}
          >
            Log in
          </Button>
          {errorMessage && (
            <Text textAlign="center" color="red.500" marginTop="1rem">
              {errorMessage}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>

  );
};

export default Login;
