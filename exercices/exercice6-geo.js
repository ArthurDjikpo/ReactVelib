import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { getVelibFromApi } from './exercice3-API';

export async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      throw new Error('Location permission not granted');
    }
  }

const distance = 1000

// recup les velibs pour le store
export const velibsStore = async () => {
  const position = await getLocationAsync().catch(error => console.log(error));
  const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&geofilter.distance=${position.coords.latitude},${position.coords.longitude},${distance}`;
  return getVelibFromApi(url);
};