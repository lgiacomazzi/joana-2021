import "../styles/globals.css";

import { BioContextProvider } from "../contexts/BioContext";

function MyApp({ Component, pageProps }) {
  return (
    <BioContextProvider>
      <Component {...pageProps} />
    </BioContextProvider>
  );
}

export default MyApp;
