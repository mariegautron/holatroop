import React from "react";
import firebase from "firebase/app";

export const AuthContext = React.createContext<{
  user: firebase.User | null;
  isLoading: boolean;
}>({ user: null, isLoading: true });
