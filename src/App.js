import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';

import { initMapToLoad } from './constants';
import { getNewMapToLoad } from './utils';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const fooState = useSelector(state => state.keplerGl.foo);
  
  useEffect(() => {
    dispatch(addDataToMap(
      initMapToLoad
    ));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addDataToMap(
      getNewMapToLoad(fooState)
    ));
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Load data</button>
      <KeplerGl
        id="foo"
        mapboxApiAccessToken="pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoidGllX1gxUSJ9.gElUooDF7u51guCQREmAhg"
        width={1200}
        height={800}
      />
    </div>
  );
}

export default App;
