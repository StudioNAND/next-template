import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../theme/createEmotionCache";
import { Global, css } from "@emotion/react";
import { useStoreInstances } from "../stores/index";
import { Provider } from "mobx-react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { data } = pageProps;
  const snapshot = data?.dataStore;
  const { dataStore,  uiStore } = useStoreInstances(snapshot);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      />

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider
          dataStore={dataStore}
          uiStore={uiStore}
        >
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

