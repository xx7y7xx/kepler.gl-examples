import { combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import { taskMiddleware } from 'react-palm/tasks';

const reducers = combineReducers({
  keplerGl: keplerGlReducer.initialState({
    uiState: {
      readOnly: true,
      mapControls: {
        visibleLayers: {
          show: false
        },
        mapLegend: {
          show: false,
          active: false
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        }
      }
    }
  }),
});

export default createStore(reducers, {}, applyMiddleware(taskMiddleware));