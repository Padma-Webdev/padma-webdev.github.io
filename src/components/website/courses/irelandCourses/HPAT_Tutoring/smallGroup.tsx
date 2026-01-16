import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const SmallGroupTutoring = () => {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>
            Small Group HPAT Tutoring
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedSubText}>(Live Online)</Text>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text
          style={
            isSmallScreen
              ? groupStyles.groupBodySmallScreen
              : groupStyles.groupBody
          }
        >
          Our Small Group(Groups of 3–5 students) HPAT tutoring is ideal for
          students who learn best in a collaborative environment. Sessions are
          live online, interactive, and designed to keep students progressing
          consistently.
        </Text>
        <Text
          style={
            isSmallScreen
              ? groupStyles.groupHeaderSmallScreen
              : groupStyles.groupHeader
          }
        >
          Price:{" "}
        </Text>
        <Text
          style={
            isSmallScreen ? groupStyles.pricingSmallScreen : groupStyles.pricing
          }
        >
          €20 per group session
        </Text>
      </View>
      <Text
        style={
          isSmallScreen
            ? groupStyles.groupBoldHeaderSmallScreen
            : groupStyles.groupBoldHeader
        }
      >
        Includes:
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Live online small group sessions (3–5 students)
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Strategy-focused teaching and guided practice
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Structured HPAT strategy teaching
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Notes provided for revision
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Interactive Q&A throughout
      </Text>
    </View>
  );
};

export const SmallGroupTutoringFAQs = () => {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  return (
    <View>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        How many students are in each group?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Groups are limited to 3–5 students to ensure strong
        interaction and personalised support.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Do you provide notes?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. We provide notes to support revision and reinforce
        strategies covered in sessions.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Are sessions live or recorded?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Sessions are delivered live online.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Do you provide notes?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. We provide notes to support revision and reinforce
        strategies covered in class.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Can I ask questions during class?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. Sessions are interactive, and students are encouraged to
        ask questions throughout.
      </Text>
      <Text style={groupStyles.faqQuestions}>What if I miss a session?</Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Please contact us to discuss access to notes/materials or
        alternative arrangements.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        What is your refund policy?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        {"\u2022"} Fees are refundable if cancelled at least 48 hours in
        advance.
      </Text>
    </View>
  );
};
