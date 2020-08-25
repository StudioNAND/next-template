import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { getStoreInstances } from '../stores/index';
import theme from '../theme';
import CssBaseline from '../CssBaseline';

let { dataStore } = getStoreInstances();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const isServer = !!ctx.req;

    if (isServer) {
      const { dataStore: dsInstance } = getStoreInstances();
      dataStore = dsInstance;
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        dataStore,
        ...ctx,
      });
    }
    return {
      isServer,
      pageProps,
      dataStore: dataStore.getSnapshot(),
    };
  }
  constructor(props) {
    super(props);
    if (global.window) {
      // lets hydrate the stores with the snapshot from the server
      dataStore.hydrate(props.dataStore);
    }
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
