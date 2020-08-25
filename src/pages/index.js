import React, { Component } from 'react';
import WindowSize from '../components/WindowSize';

const IndexPage = () => {
  return <WindowSize />;
};

// you can use getInitalProps to initialize your stores with data needed upon page load
IndexPage.getInitialProps = async ({ dataStore }) => {
  await dataStore.window.setSize({ width: 420, height: 420 });
  return {};
};
export default IndexPage;
