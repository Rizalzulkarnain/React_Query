import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';

import Planet from './Planet';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['planets', page],
    fetchPlanets
  );

  return (
    <div>
      <h1>Planets</h1>

      {status === 'error' && <div>error fecthing data</div>}
      {status === 'loading' && <div>loading data....</div>}
      {status === 'success' && (
        <>
          {resolvedData.results.map((planet, index) => (
            <div key={index}>
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
              >
                Previous Page
              </button>
              <span>{page}</span>
              <button
                onClick={() =>
                  setPage((old) =>
                    !latestData || !latestData.next ? old : old + 1
                  )
                }
                disabled={!latestData || !latestData.next}
              >
                Next Page
              </button>
              <div>
                <Planet key={planet.name} planet={planet} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Planets;
