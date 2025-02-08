// import { url } from "inspector";

const mapHeight = { height: 'calc(100vh - 111px)' };

const tileLayers = [
  // {
  //   id: 1,
  //   name: 'OpenStreetMap.Mapnik',
  //   attribution:
  //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  //   checked: false
  // },
  // {
  //     id: 2,
  //     name: 'Dark',
  //     attribution:
  //       '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  //     url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  //     checked: false
  //   },
    {
      id: 1,
      name: 'Grey',
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      checked: true
    },
  {
    id: 2,
    name: 'GoogleStreets',
    attribution: '&copy; Google',
    url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    checked: false
  },
  // {
  //   id: 5,
  //   name: 'GoogleSatellite',
  //   attribution: '&copy; Google',
  //   url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  //   checked: false
  // }
];

const tectonicPlatesStyle = {
  color: 'green',
  weight: 2
};

export { mapHeight, tileLayers, tectonicPlatesStyle };
