import { useEffect } from 'react';
import { Control, DomUtil } from 'leaflet';
import { useMap } from 'react-leaflet';

import { circleMarkerColor } from '../utils';
import './index.css';

export default function Legend() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const legend = new Control({ position: 'bottomleft' });

    legend.onAdd = () => {
      const div = DomUtil.create('div', 'info legend');
      const grades = [7, 5, 3, 2, 1, 0];
      // const grades = [0, 1, 2, 3, 5, 7];
      const labels = [];

      labels.push('<h4>Magnitude</h4>');

      grades.forEach((from, index) => {
        const to = grades[index - 1];
        labels.push(
          `<i style="background:${circleMarkerColor(from + 1)}"></i>${from}${
            to ? ` &le; ${to}` : '+'
          }`
        );
      });

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(map);
  }, [map]);

  return null;
}
