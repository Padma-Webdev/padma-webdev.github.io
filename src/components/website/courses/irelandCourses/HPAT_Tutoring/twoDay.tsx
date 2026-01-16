import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const TwoDayCourse = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;

  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>
            HPAT 2-Day Online Course
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
          The HPAT 2-Day Online Course is an intensive programme designed to
          give students a complete understanding of the HPAT exam in a short
          timeframe. It covers all three HPAT sections in detail, with a strong
          focus on exam technique, time management, and avoiding common
          pitfalls. This course is ideal for first-time HPAT candidates, repeat
          candidates, and students who want focused, high-impact preparation.
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
         €150
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
        {"\u2022"} ⁠Live expert HPAT tuition
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Full HPAT mock exam
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Sample questions equivalent to 5 full HPAT exams
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Fully worked solutions
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Comprehensive course notes
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Proven exam strategies
      </Text>
      <View style={{marginTop:20}}>
      <Text
        style={
          isSmallScreen
            ? groupStyles.groupBoldHeaderSmallScreen
            : groupStyles.groupBoldHeader
        }
      >
        Tentative Dates in 2026:
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} June: 27 and 28
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} August 22 and 23
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Dec: 12 and 13
      </Text>
      </View>
    </View>
  );
};

export const TwoDayTutoringFAQs = () => {
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
        What is the HPAT 2-Day Course?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} An intensive online course covering all three HPAT sections
        with strategy-based teaching and a full mock exam.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Who is this course suitable for?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} First-time HPAT candidates, repeat candidates, and students
        close to the exam date.
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
        {"\u2022"} Classes are delivered live online. Live attendance is
        strongly recommended.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        How do I access the course?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Login details are emailed to students before the course
        begins.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Are notes included?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. Comprehensive notes are provided.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Can I buy the notes without attending?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} No. Notes are designed to support live tuition only.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Is a mock exam included?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. A full HPAT-style mock exam is included.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Do students keep the mock exam?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} ⁠Yes, along with worked solutions.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        What if I miss part of the course?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} You may request course notes by contacting our office.
      </Text>
    </View>
  );
};
