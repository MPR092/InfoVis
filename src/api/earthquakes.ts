// getting input for startdate/time and enddate/time as per the usgc
import httpService from './httpService';

// function to get earthquake data/time from http service
const getEarthquakes = async (starttime: string, endtime: string) => {
  try {
    const response = await httpService.get(
      `/fdsnws/event/1/query?format=geojson&starttime=${starttime}&endtime=${endtime}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log('There was an error while getting the earthquakes', error);
    return false;
  }
};

export { getEarthquakes };
