import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const PersonalisedTutoring = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;

  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>1:1 HPAT Tutoring</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedSubText}>
            (Personalised 1-on-1 Coaching)
          </Text>
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
          Our 1:1 HPAT tutoring is designed for students who want the most
          tailored support. Each session is customised to your goals, strengths,
          weaknesses, and timeline—so your preparation is efficient and
          score-focused.
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
        <View style={{ flexDirection: "row"}}>
          <Text
            style={
              isSmallScreen
                ? groupStyles.pricingSmallScreen
                : groupStyles.pricing
            }
          >
            €34 per session
          </Text>
          <Text
            style={
              isSmallScreen
                ? groupStyles.groupHeaderSmallScreen
                : {
                    fontSize: 16,
                    color: "#f8fefe",
                    marginBottom: 6,
                    marginLeft: 5,
                  }
            }
          >
            (15% discount from €40)
          </Text>
        </View>
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
        {"\u2022"} Fully personalised 1:1 HPAT tutoring
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
        {"\u2022"} Notes provided for revision
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Direct feedback and improvement plan
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Flexible online scheduling
      </Text>
    </View>
  );
};

export const PersonalisedTutoringFAQ = () => {
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
        What is included in 1:1 HPAT tutoring?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Personalised coaching, targeted strategy work, guided
        practice, and detailed feedback focused on improving performance.
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
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        Can tutoring focus only on my weakest HPAT section?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. Sessions are tailored to the areas that will improve
        your overall performance fastest.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        How quickly can I start?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} After booking, our Coordinator will contact you to arrange
        sessions as soon as possible.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        How many sessions will I need?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} It depends on your starting point and exam date. Your tutor
        will recommend an effective plan.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Is tutoring online?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. All sessions are delivered online.
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
