export const pointLayerDatasetId = 'point-layer-dataset-id';
export const POLYGON_DATASET_ID = 'polygon-layer-dataset-id';
export const POLYGON_LAYER_ID = 'polygon-layer-id';

export const pointLayerFieldsDefinition = [
  { name: 'longitude', format: '', type: 'real' },
  { name: 'latitude', format: '', type: 'real' }
];

export const polygonLayerFieldsDefinition = [
  { name: 'name', format: '', type: 'string' },
  { name: 'mall_polygon', format: '', type: 'geojson' }
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
    info: { label: 'Polygon data', id: POLYGON_DATASET_ID },
    data: {
      fields: polygonLayerFieldsDefinition,
      rows: [
        ['VivoCity', '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"fillColor":[255, 0, 0]},"geometry":{"coordinates":[[[103.8198,1.2655],[103.8199,1.2631],[103.8234,1.2631],[103.8235,1.2655],[103.8198,1.2655]]],"type":"Polygon"}}]}'],
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
      filters: [],
      layers: [
        {
          id: POLYGON_LAYER_ID,
          type: 'geojson',
          config: {
            dataId: POLYGON_DATASET_ID,
            label: 'Polygon Layer',
            // color: [67, 143, 69], // #438F45
            columns: {
              geojson: 'mall_polygon',
            },
            isVisible: true,
            visConfig: {
              // fill color is from geojson feature.properties.fillColor
              filled: true,
            },
          },
          
        }
      ]
    }
  },
};

export const newPoints = [
  [103.82482, 1.26473],
];
