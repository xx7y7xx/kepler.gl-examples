export const pointLayerDatasetId = 'point-layer-dataset-id';

export const fieldsDef = [
  { name: 'longitude', format: '', type: 'real' },
  { name: 'latitude', format: '', type: 'real' },
  { name: 'value', format: '', type: 'real' },
];

export const initMapToLoad = {
  info: {
    title: 'Point and Polygon',
    description: 'Will display points and polygons on the map',
  },
  datasets: [
    {
      info: { label: 'Point data', id: pointLayerDatasetId },
      data: {
        fields: fieldsDef,
        rows: [
          [103.80177, 1.273607, 0.12],
          [103.80177, 1.270617, 0.13],
          [103.80177, 1.272507, 0.15], // still on map for filter range [0.1,0.14]
          [103.80277, 1.271507, 0.16],
          [103.81299, 1.275041, -1000000],
        ],
      },
    },
  ],
  options: {
    centerMap: true,
    readOnly: false,
    keepExistingConfig: false,
  },
  config: {
    visState: {
      filters: [],
    },
  },
};


