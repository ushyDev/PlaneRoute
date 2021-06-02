const ratioCoords = (data: any, indexTimestamp: number, type: string) => {
  if (type === "lng") {
    const timeAtoB: number =
      data[indexTimestamp + 1].timestamp - data[indexTimestamp].timestamp;
    const lngAtoB = data[indexTimestamp + 1].lng - data[indexTimestamp].lng;
    return lngAtoB / timeAtoB;
  } else if (type === "lat") {
    const timeAtoB: number =
      data[indexTimestamp + 1].timestamp - data[indexTimestamp].timestamp;
    const latAtoB = data[indexTimestamp + 1].lat - data[indexTimestamp].lat;
    return latAtoB / timeAtoB;
  } else {
    return 1;
  }
};
export default ratioCoords;
