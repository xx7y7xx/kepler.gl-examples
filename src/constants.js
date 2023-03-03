export const pointLayerDatasetId = 'point-layer-dataset-id';
export const polygonLayerDatasetId = 'polygon-layer-dataset-id';

export const pointLayerFieldsDefinition = [
  { name: 'longitude', format: '', type: 'real' },
  { name: 'latitude', format: '', type: 'real' }
];

export const polygonLayerFieldsDefinition = [
  { name: 'name', format: '', type: 'string' },
  { name: 'polygon', format: '', type: 'geojson' }
];

export const initMapToLoad = {
  info: {
    title: 'Point and Polygon',
    description: 'Will display points and polygons on the map'
  },
  datasets: [{
    info: { label: 'Point data', id: pointLayerDatasetId },
    data: {
      fields: pointLayerFieldsDefinition,
      rows: [
        [103.801770, 1.273607],
        [103.822990, 1.275041],
      ]
    },
  }, {
    info: { label: 'Polygon data', id: polygonLayerDatasetId },
    data: {
      fields: polygonLayerFieldsDefinition,
      rows: [
        ['VivoCity', '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[[103.8198,1.2655],[103.8199,1.2631],[103.8234,1.2631],[103.8235,1.2655],[103.8198,1.2655]]],"type":"Polygon"}}]}'],
      ]
    },
  }],
  options: {
    centerMap: true,
    readOnly: false,
    keepExistingConfig: false
  },
  config: {
    visState: {
      filters: []
    }
  },
};
