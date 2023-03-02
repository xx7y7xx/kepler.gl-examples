import KeplerGlSchema from 'kepler.gl/schemas';

import { pointLayerDatasetId, newPoints } from './constants';

export const getNewMapToLoad = (fooState) => {
  // save current map data and config
  const { datasets, config } = KeplerGlSchema.save(fooState);

  const newDatasets = datasets.map(dataset => {
    if (dataset.data.id !== pointLayerDatasetId) {
      return dataset;
    }
    return ({
      version: dataset.version,
      data: {
        ...dataset.data,
        allData: [
          ...dataset.data.allData,
          ...newPoints,
        ],
      }
    });
  });

  // load config with new datasets
  const mapToLoad = KeplerGlSchema.load(newDatasets, config);

  return mapToLoad;
};