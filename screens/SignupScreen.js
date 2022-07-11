import { useContext } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { registerUser } from "../utils/auth";

function SignupScreen() {
  const authContext = useContext(AuthContext);

  const handleRegister = async ({ email, password }) => {
    const token = await registerUser(email, password);
    authContext.authenticate(token);
  };

  return <AuthContent onAuthenticate={handleRegister} />;
}

export default SignupScreen;
