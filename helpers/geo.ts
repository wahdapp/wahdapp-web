type Location = {
  lat: number;
  lng: number;
};

export function calculateDistance(x: Location, y: Location) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(y.lat - x.lat); // deg2rad below
  const dLng = deg2rad(y.lng - x.lng);
  // prettier-ignore
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(x.lat)) *
    Math.cos(deg2rad(y.lat)) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function formatDistance(distance, t) {
  if (distance < 1) {
    return `${Math.floor(distance * 1000)} ${t('common:DISTANCE.M')}`;
  }
  return `${distance.toFixed(2)} ${t('common:DISTANCE.KM')}`;
}
