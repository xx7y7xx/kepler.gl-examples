import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import './App.css';

const mapData = {
  datasets: {
    info: {
      label: 'Sample Taxi Trips in New York City',
      id: 'test_trip_data'
    },
    data: {
      fields: [
        {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
        {name: 'pickup_longitude', format: '', type: 'real'},
        {name: 'pickup_latitude', format: '', type: 'real'}
      ],
      rows: [
        ['2015-01-15 19:05:39 +00:00', 103.801770, 1.273607],
        ['2015-01-15 19:05:39 +00:00', 103.822990, 1.275041],
      ]
    },
  },
  options: {
    centerMap: true,
    readOnly: false,
    keepExistingConfig: false
  },
  info: {
    title: 'Taro and Blue',
    description: 'This is my map'
  },
  config: {
    visState: {
      filters: [
        {
          id: 'me',
          dataId: 'test_trip_data',
          name: 'tpep_pickup_datetime',
          type: 'timeRange',
          enlarged: true
        }
      ]
    }
  },
};

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(addDataToMap(mapData));
  }, [dispatch])

  return (
    <div className="App">
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
