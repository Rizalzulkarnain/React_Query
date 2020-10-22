import React, { useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import Navbar from './components/Navbar';

import Planets from './components/Planets';
import People from './components/People';

import './App.css';

const queryCache = new QueryCache();

const App = () => {
  const [page, setPage] = useState('planets');

  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <div className="app">
          <h1>Fetching Data using React-Query</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People />}
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </>
  );
};

export default App;
