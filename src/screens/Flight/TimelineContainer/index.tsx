import React, { FC, useState } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { Slider } from "@miblanchard/react-native-slider";
import { IRoute } from "../../../types/IRoute";
import { TIMELINE_BUFFER_SEC } from "../../../config";

interface Props {
  data: IRoute[];
  callbackValue: (childData: number) => void;
}

const TimelineContainer: FC<Props> = (props: Props) => {
  const [value, setValue] = useState<number | number[] | any>(0);
  const timestampData = props.data[0].route_points;
  const length = timestampData.length;

  const time =
    (timestampData[length - 1].timestamp as number) -
    (timestampData[0].timestamp as number) +
    2 * TIMELINE_BUFFER_SEC;

  const trackMarks = [TIMELINE_BUFFER_SEC, time - TIMELINE_BUFFER_SEC];

  const renderTrackMarkComponent = (index: number) => {
    const currentMarkValue = trackMarks[index];
    const style =
      currentMarkValue > Math.max(value)
        ? styles.activeMark
        : styles.inactiveMark;
    const text = index == 0 ? "Take-off" : "Landing";

    return (
      <View style={{ alignItems: "center" }}>
        <View style={style} />
        <Text style={styles.textTimelineMark}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.timelineContainer}>
      <View style={styles.timeline}>
        <Slider
          trackMarks={trackMarks}
          renderTrackMarkComponent={renderTrackMarkComponent}
          step={1}
          value={value}
          onValueChange={(value) => {
            const num: number = value[0];
            if (
              num >= TIMELINE_BUFFER_SEC &&
              num - TIMELINE_BUFFER_SEC + timestampData[0].timestamp <=
                timestampData[length - 1].timestamp
            ) {
              props.callbackValue(num - TIMELINE_BUFFER_SEC);
            }
            setValue(num);
          }}
          maximumValue={time}
        />
      </View>
    </View>
  );
};
export default TimelineContainer;
