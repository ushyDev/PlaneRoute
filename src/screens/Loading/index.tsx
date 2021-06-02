import React, { FC } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

interface Props {}

const Loading: FC = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../../../assets/1549397192541.png")}
      />
    </View>
  );
};
export default Loading;
