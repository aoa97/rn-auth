import axios from "axios";

const AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts";

const authenticate = async (mode, email, password) => {
  const res = await axios.post(
    `${AUTH_URL}:${mode}?key=AIzaSyBim-NGacdQpkxuEhF7G9g8KhlO3hIjIKo`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return res.data.idToken;
};

export const registerUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const loginUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
