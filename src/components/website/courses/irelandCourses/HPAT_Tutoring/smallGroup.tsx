import { View,Text } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const SmallGroupTutoring = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={groupStyles.personalisedText}>
          Small Group HPAT Tutoring (Live Online)
        </Text>
        <Text style={groupStyles.groupHeader}>
          {"\u27A1"} Structured Learning with Motivation and Support
        </Text>
        <Text style={groupStyles.groupBody}>
          Our Small Group HPAT tutoring is ideal for students who learn best in a collaborative environment. Sessions are live online, interactive, and designed to keep students progressing consistently.
        </Text>
        <Text style={groupStyles.groupHeader}>{"\u27A1"} Group Size:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            Small groups of 3–5 students
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            (to ensure interaction, support, and time for questions)
          </Text>
        </View>
        <Text style={groupStyles.groupHeader}>{"\u27A1"} What You Get</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            {"\u2022"} Interactive Learning:
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            Ask questions, practise strategies, and learn actively
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            {"\u2022"} Collaborative Environment:
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            Motivation and insight from peers in a focused setting
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            {"\u2022"} Consistent Preparation:
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            Sessions arranged to suit your timetable
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            {"\u2022"} Seamless Process:
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            Ongoing preparation to keep you exam-ready and confident
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={groupStyles.groupBoldHeader}>
            {"\u2022"} Notes Included:
          </Text>
          <Text style={groupStyles.groupRegHeader}>
            We provide notes for revision and structured study
          </Text>
        </View>
        <Text style={groupStyles.groupHeader}>
          {"\u27A1"} Pricing – Small Group HPAT Tutoring
        </Text>
        <Text
          style={groupStyles.pricing}
        >
          €XXX per course / term
        </Text>
        <Text
          style={groupStyles.nextLine}
        >
          Includes:
        </Text>
        <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Live online small group sessions (3–5 students)
        </Text>
        <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Strategy-focused teaching and guided practice
        </Text>
        <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Structured HPAT strategy teaching
        </Text>
        <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Notes provided for revision
        </Text>
         <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Interactive Q&A throughout
        </Text>
        <Text
          style={groupStyles.pricingNextLine}
        >
          {"\u2022"} Consistent preparation leading up to exam day
        </Text>
      </View>
    );
  };