import React from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { HPAT_CHANGES } from "./hpatArray";
import { hpatStyles } from "./hpatStyles";

export default function HPATChangesContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const Array = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
        <View>
          <Text
            style={hpatStyles.hpatTitle}
          >
            {item.title}
          </Text>
          <Text style={hpatStyles.hpatDesc}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
  const displayHPAT = () => {
    return HPAT_CHANGES?.map((item, index) => {
      return Array(item, index);
    });
  };
  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <View
        style={hpatStyles.backButton}
      >
        <BackButton />
      </View>

      <View
        style={hpatStyles.hpatDisplay}
      >
        {displayHPAT()}
      </View>
    </ScrollView>
  );
}
