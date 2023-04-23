import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, addFilter, setFilter } from 'kepler.gl/actions';

import { initMapToLoad, pointLayerDatasetId, fieldsDef } from './constants';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const fooState = useSelector((state) => state.keplerGl.foo);

  useEffect(() => {
    dispatch(addDataToMap(initMapToLoad));
  }, [dispatch]);

  const handleClick = () => {
    // create a new filter
    dispatch(addFilter(pointLayerDatasetId));
    // filter for "value" column
    dispatch(setFilter(0, 'name', fieldsDef[2].name));
    // set filter range
    dispatch(setFilter(0, 'value', [0.1, 0.14]));
  };

  console.log('kepler.gl filters', fooState?.visState?.filters?.[0]);
  console.log('kepler.gl visState', fooState?.visState);

  return (
    <div className='App'>
      <button onClick={handleClick}>add filter (0.1~0.14)</button>
      {fooState?.visState?.filters?.[0]?.value?.join(',  ')}
      <KeplerGl
        id='foo'
        mapboxApiAccessToken='pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoidGllX1gxUSJ9.gElUooDF7u51guCQREmAhg'
        width={1200}
        height={800}
      />
    </div>
  );
}

export default App;
