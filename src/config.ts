import { Dimensions } from "react-native";
import { Region } from "react-native-maps";

const { height, width } = Dimensions.get("window");
const LATITUDE_DELTA = 25;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

export const MAP_VIEW_INITIAL_REGION: Region = {
  latitude: 38.5,
  longitude: -105,
  latitudeDelta: LONGITUDE_DELTA,
  longitudeDelta: LATITUDE_DELTA,
};

export const TIMELINE_BUFFER_HOURS = 3;
export const TIMELINE_BUFFER_SEC = TIMELINE_BUFFER_HOURS * 3600;

export const COLORS = {
  primary: "#1f2024",
  secondary: "#27282c",
  gray: "#c8c9cb",
  blue: "#406ad3",
  white: "#ffffff",
  black: "#010308",
};
