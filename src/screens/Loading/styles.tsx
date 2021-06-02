import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
});

export default styles;
