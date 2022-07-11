import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logOut: () => [],
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = async (token) => {
    if (token) {
      setAuthToken(token);
      await AsyncStorage.setItem("authToken", token);
    }
  };

  const logOut = async () => {
    setAuthToken(null);
    await AsyncStorage.removeItem("authToken");
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
