import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/Firebase";

const theme = extendTheme({
  colors: {
    troopers: {
      mauve: {
        500: "#9777A8",
      },
      prune: {
        500: "#3D324C",
      },
      orange: {
        500: "#F4A160",
      },
      bleu: {
        500: "#5FAFE2",
      },
      vert: {
        500: "#33B18F",
      },
      rouge: {
        500: "#E26566",
      },
      silver: {
        500: "#F5F6F7",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
