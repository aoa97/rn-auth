import { useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { loginUser } from "../utils/auth";

function LoginScreen() {
  const authContext = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    try {
      const token = await loginUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed!",
        "Please check your inputs and try again."
      );
    }
  };

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
