import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../config";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  //Containers
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  leftContainer: {
    width: 420,
    height: height,
    backgroundColor: COLORS.primary,
  },
  mapContainer: {
    backgroundColor: "pink",
    width: width - 420 - 64,
    height: height - 171,
  },
  rightContainer: {
    width: 64,
    height: height,
    backgroundColor: COLORS.primary,
  },
  timelineContainer: {
    height: 171,
    width: width - 420 - 64,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  //Other Styles
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  marker: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 7,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: COLORS.gray,
    alignSelf: "center",
  },
  activeMark: {
    top: 10,
    width: 2,
    height: 45,
    backgroundColor: COLORS.white,
  },
  inactiveMark: {
    top: 10,
    width: 1.5,
    height: 30,
    backgroundColor: COLORS.gray,
  },
  timeline: {
    width: width - 420 - 64 - 80,
  },
  textTimelineMark: {
    top: 12,
    color: COLORS.white,
    fontSize: 10,
  },
});

export default styles;
