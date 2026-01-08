import React from "react";
import BackButton from "../../../common/back-button";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "./groupPrepStyles";
import { PersonalisedTutoring } from "./personalCoaching";
import { SmallGroupTutoring } from "./smallGroup";

export default function GroupPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const Header = () => {
    return (
      <View>
        <Text style={groupStyles.mainText}>
          HPAT Tutoring Ireland – 1:1 & Small Group HPAT Preparation (Online)
        </Text>
        <Text style={hpatStyles.hpatDesc}>
          The HPAT (Health Professions Admissions Test) is a key step for
          students applying to Medicine and Dentistry in Ireland. Success in
          HPAT requires strong reasoning, judgement, and problem-solving skills
          under time pressure.
        </Text>
        <Text style={hpatStyles.hpatDesc2}>
          MedTutor offers expert-led HPAT tutoring designed to maximise
          performance, confidence, and exam-day strategy. Choose 1:1 tutoring
          for fully personalised coaching or Small Group tutoring for structured
          learning with peer motivation.
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <View style={hpatStyles.backButton}>
        <BackButton />
      </View>
      <View style={groupStyles.topHeader}>{Header()}</View>
      <View style={groupStyles.flexSplit}>
        <View style={groupStyles.personalisedCont}>
          {PersonalisedTutoring()}
        </View>
        <View style={groupStyles.personalisedCont}>
          {SmallGroupTutoring()}
        </View>
      </View>
    </ScrollView>
  );
}
