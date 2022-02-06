import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';

export function Main({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
