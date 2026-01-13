import React from "react";
import { Dimensions, Text, View } from "react-native";
import { heroStyles } from "./styles";

export default function HeroContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  return (
    <View style={isSmallScreen ? heroStyles.mobileView : heroStyles.mainView}>
      <View>
        <Text
          style={
            isSmallScreen ? heroStyles.heroTextMobile : heroStyles.heroText
          }
        >
          MedTutor: Your Journey to Medicine and Dentistry Starts Here.
        </Text>
      </View>
      <View style={heroStyles.subView}>
        <Text
          style={isSmallScreen ? heroStyles.subTextMobile : heroStyles.subText}
        >
          Achieve your potential with personalised HPAT and UCAT tutoring from
          expert mentors at top UK and Irish universities.
        </Text>
      </View>
    </View>
  );
}
