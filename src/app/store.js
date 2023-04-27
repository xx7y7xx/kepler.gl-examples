import { combineReducers, createStore, applyMiddleware } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import { taskMiddleware } from 'react-palm/tasks';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

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

export default createStore(reducers, {}, applyMiddleware(taskMiddleware, logger));