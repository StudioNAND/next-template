import React, { Component } from 'react';
import WindowSize from '../components/WindowSize';
import { getStoreInstances } from "../stores/index";

const IndexPage = () => {
  return <WindowSize />;
};

export default IndexPage;

const stupidify = (data) => JSON.parse(JSON.stringify(data));

export async function getServerSideProps(context) {
  const { dataStore } = getStoreInstances(); 
  await dataStore.window.setSize({ width: 420, height: 420 });
  return {
    props: {
      data: {
        dataStore: stupidify(dataStore.toJSON()),
      },
    },
  };
}

