import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import { githubDb } from '@db-man/github';

import { initMapToLoad } from './constants';
import { getNewMapToLoad } from './utils';

import './App.css';

localStorage.setItem(
  "dm_dbs_schema",
  `[{"name":"points","columns":[{"id":"id","name":"ID","primary":true},{"id":"lat","name":"Latitude"},{"id":"lng","name":"Longitude"}]}]`
);
localStorage.setItem("dm_github_owner", "db-man");
localStorage.setItem("dm_github_personal_access_token", "");
localStorage.setItem("dm_github_repo_name", "db");
localStorage.setItem("dm_github_repo_path", "dbs");

function App() {
  const dispatch = useDispatch();
  const fooState = useSelector(state => state.keplerGl.foo);
  
  useEffect(() => {
    dispatch(addDataToMap(
      initMapToLoad
    ));
  }, [dispatch]);

  const handleClick = () => {
    githubDb
      .getTableRows("map", "points")
      .then(res => {
        const point = res.content[0];
        dispatch(addDataToMap(
          getNewMapToLoad(fooState, [[point.lng, point.lat]])
        ));
      });
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
