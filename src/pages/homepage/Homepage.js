import React from 'react';
import { Main } from '../../components/Main';
import { NavBar } from './NavBar';
import { Movies } from './Movies';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { useJsonFetch } from '../../hooks/useJsonFetch';

export function Homepage() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_HOMEPAGE_URL}/api`);

  return (
    <Main>
      <NavBar />
      { isLoading && <Loader /> }
      { error && <Error /> }
      { !isLoading && data && <Movies movies={data} /> }
    </Main>
  );
}
