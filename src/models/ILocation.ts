interface ILocation {
  location: {
    latitude: number;
    longitude: number;
  };
  getContent(): string;
}

export default ILocation;
