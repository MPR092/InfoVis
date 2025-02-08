const circleMarkerColor = (magnitude: number): string => {
  if (magnitude <= 1) return '#fed976';
  if (magnitude > 1 && magnitude <= 2) return '#feb24c';
  if (magnitude > 2 && magnitude <= 3) return '#fd8d3c';
  if (magnitude > 3 && magnitude <= 5) return '#fc4e2a';
  if (magnitude > 5 && magnitude <= 7) return '#e31a1c';
  return '#b10026';
};

const geojsonMarkerOptions = (magnitude: number): Object => ({
  radius: 2.5 * magnitude,
  fillColor: circleMarkerColor(magnitude),
  color: 'grey',
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.8
});

export { circleMarkerColor, geojsonMarkerOptions };
