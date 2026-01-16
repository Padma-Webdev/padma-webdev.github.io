import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const EightWeekCourse = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;

  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>
            8-Week HPAT Preparation Course
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
          The 8-Week HPAT Course offers structured, in-depth preparation
          delivered one day per week. This format allows students to build
          skills gradually, practise between sessions, and develop strong exam
          confidence over time. This course is ideal for students starting HPAT
          preparation early and balancing HPAT study with the Leaving
          Certificate.
        </Text>
        <Text
          style={
            isSmallScreen
              ? groupStyles.groupHeaderSmallScreen
              : groupStyles.groupHeader
          }
        >
         Price: {" "}
        </Text>
        <Text
          style={
            isSmallScreen ? groupStyles.pricingSmallScreen : groupStyles.pricing
          }
        >
          €240 (8 sessions)
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
        {"\u2022"} Weekly live online classes
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Structured homework and practice questions
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} ⁠Full HPAT mock exam
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Worked solutions and detailed feedback
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
        {"\u2022"} Ongoing academic support
      </Text>
    </View>
  );
};

export const EightWeekCourseFAQs = () => {
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
        What is the 8-Week HPAT Course?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} A comprehensive online HPAT programme delivered over eight
        weeks.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        Who is this course best suited for?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Students starting early and aiming for consistent
        improvement.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        How often are classes held?
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Once per week, live online.
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
        {"\u2022"} Yes. Comprehensive notes are provided throughout the course.
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
        {"\u2022"} Yes. A full HPAT-style mock exam is included in Week 8.
      </Text>
      <Text style={groupStyles.faqQuestions}>Will I receive feedback?</Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqAnswersSmallScreen
            : groupStyles.faqAnswers
        }
      >
        {"\u2022"} Yes. Detailed feedback and performance analysis are provided.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.faqQuestionsSmallScreen
            : groupStyles.faqQuestions
        }
      >
        What if I miss a class?
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
