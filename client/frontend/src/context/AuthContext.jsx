import { createContext, useContext, useEffect, useState } from "react";
import axios from "../lib/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const loadUserFromCookies = async () => {
    try {
      const res = await axios.get("/user");
      const { data } = res.data;

      setUser(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const signup = async (formData) => {
    try {
      const res = await axios.post("/auth/signup", formData);
      const { data, failed } = res.data;
      if (!failed) setUser(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while signing up");
    }
  };

  const signin = async (formData) => {
    try {
      const res = await axios.post("/auth/signin", formData);
      const { data, failed } = res.data;
      if (!failed) setUser(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while signing in");
    }
  };

  const signout = async () => {
    try {
      await axios.post("/auth/signout");
    } catch (error) {
      console.error(error);
      alert("Error signing you out.");
    }
  };

  useEffect(() => {
    loadUserFromCookies();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
