import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "./../components/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      {/* <ContextProvider> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      {/* </ContextProvider> */}
    </ApolloProvider>
  );
}

export default MyApp;
