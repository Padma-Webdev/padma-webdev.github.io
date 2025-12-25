import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { heroStyles } from "./styles";

export default function HeroContainer() {
  return (
    <View style={heroStyles.mainView}>
      <View style={heroStyles.banner}>
        <CircleRoundedIcon width={4} height={4} sx={{ color: "#3ab7a6" }} />
        <Text style={heroStyles.bannerText}>
          Trusted by future medical professionals
        </Text>
      </View>
      <View>
        <Text style={heroStyles.heroText}>Excel in Your Medical Exams</Text>
      </View>
      <View style={heroStyles.subView}>
        <Text style={heroStyles.subText}>
          Connect with expert medical tutors and access comprehensive study
          resources designed specifically for HPAT, UCAT and medical board
          examinations.
        </Text>
      </View>
      <View style={heroStyles.buttonsView}>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#3A5EF2",
              borderColor: "#3A5EF2",
            },
            heroStyles.button,
          ]}
        >
          <Text style={heroStyles.buttonText1}>Start Learning Today</Text>
          <NavigateNextIcon width={4} height={4} sx={{ color: "#f8fefe" }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              backgroundColor: "#0a1220",
              borderColor: "#c0cad4",
            },
            heroStyles.button,
          ]}
        >
          <Text style={heroStyles.buttonText2}>Browse Courses </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
