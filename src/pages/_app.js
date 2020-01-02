import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import CssBaseline from '../CssBaseline';
import dataStore from '../stores/index';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const isServer = typeof window === 'undefined';

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      isServer,
      pageProps,
    };
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>StudioNAND next-template</title>
        </Head>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Provider dataStore={dataStore}>
            <Component {...pageProps} />
          </Provider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
