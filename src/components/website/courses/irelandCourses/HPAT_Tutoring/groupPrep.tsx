import React, { useEffect, useState } from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Linking,
  GestureResponderEvent,
} from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "./groupPrepStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  PersonalisedTutoring,
  PersonalisedTutoringFAQ,
} from "./personalCoaching";
import { SmallGroupTutoring, SmallGroupTutoringFAQs } from "./smallGroup";
import { personalStyles } from "./personalStyles";

type ButtonState = "default" | "pressed";

export const getButtonColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "#0B3D37"; // darker teal
    case "default":
    default:
      return "#23CFBB";
  }
}
export const getTextColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "white"; // darker teal
    case "default":
    default:
      return "black";
  }
}
export default function GroupPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?_gl=1*8hmqoq*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgxNDYwMjQkbzIkZzEkdDE3NjgxNDc0MDckajM1JGwwJGgw",
  };
  const [groupTutor, setGroupTutor] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
    const [buttononeState, setoneButtonState] =
    useState<ButtonState>("default");
        const [buttonGroupState, setgroupButtonState] =
    useState<ButtonState>("default");

  const handlePressOneIn = (_: GestureResponderEvent) => {
    setgroupButtonState("default");
    setoneButtonState("pressed");
  };
    const handlePressgroupIn = (_: GestureResponderEvent) => {
    setgroupButtonState("pressed");
    setoneButtonState("default");
  };

  // const handlePressOut = (_: GestureResponderEvent) => {
  //   setoneButtonState("default");
  // };

  const switchToGroup = () => {
    setGroupTutor(true);
  };
    useEffect(() => {}, [groupTutor]);
  const switchToPersonal = () => {
    setGroupTutor(false);
  };
  useEffect(() => {}, [groupTutor]);

  const switchToFAQs = () => {
    setShowFAQs(true);
  };
  const switchToCourse = () => {
    setShowFAQs(false);
  };
  useEffect(() => {}, [groupTutor]);
  useEffect(() => {}, [showFAQs]);

  const Header = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.headerSmallScreen
            : personalStyles.header
        }
      >
        <View style={personalStyles.headerOpactiy} />
        <Text style={groupStyles.mainText}>
          HPAT 1:1 & Small Group HPAT Preparation
        </Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          MedTutor offers expert-led HPAT tutoring designed to maximise
          performance, confidence, and exam-day strategy. Choose 1:1 tutoring
          for fully personalised coaching or Small Group tutoring for structured
          learning with peer motivation.
        </Text>
        <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                  borderRadius: 10,
                  padding: 5,
                  width: "85%",
                  alignSelf: "center",
                }
              : {
                  backgroundColor: "#2563EB",
                  borderRadius: 5,
                  padding: 5,
                  width: 400,
                  alignSelf: "center",
                  alignContent: "center",
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=HPAT Personalised Tutoring"
            );
          }}
        >
          <Text
            style={
              isSmallScreen
                ? groupStyles.BookingsSmallScreen
                : groupStyles.Bookings
            }
          >
            For Bookings: contactus@medtutor.ie
          </Text>
        </TouchableOpacity>
        <View style={personalStyles.findView}>
          {!isSmallScreen && <View style={personalStyles.underLine} />}
          <View>
            <Text
              style={
                isSmallScreen
                  ? personalStyles.findDetailsSmallScreen
                  : personalStyles.findDetails
              }
            >
              FIND MORE DETAILS BELOW
            </Text>
          </View>
          {!isSmallScreen && <View style={personalStyles.underLine} />}
        </View>
        <View
          style={
            isSmallScreen
              ? personalStyles.courseButtonViewSmallScreen
              : personalStyles.courseButtonView
          }
        >
          <TouchableOpacity
            onPress={switchToPersonal}
            onPressIn={handlePressOneIn}
            style={[isSmallScreen
                ? personalStyles.personalTutorSmallScreen
                : personalStyles.personalTutor,{ backgroundColor: getButtonColor(buttononeState) },
            ]}
          >
            <Text
              style={
                [isSmallScreen
                  ? personalStyles.buttonTextSmallScreen
                  : personalStyles.buttonText,{color:getTextColor(buttononeState)}]
              }
            >
              1:1 HPAT Tutoring
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={switchToGroup}
            onPressIn={handlePressgroupIn}
            style={[isSmallScreen
                ? personalStyles.personalTutorSmallScreen
                : personalStyles.personalTutor,{ backgroundColor: getButtonColor(buttonGroupState) },
            ]}
          >
            <Text
              style={
                [isSmallScreen
                  ? personalStyles.button2TextSmallScreen
                  : personalStyles.button2Text,{color:getTextColor(buttonGroupState)}]
              }
            >
              Small Group Tutoring
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CourseDetails = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.courseViewSmallScreen
            : personalStyles.courseView
        }
      >
        <View style={personalStyles.headerOpactiy} />
        {!groupTutor ? PersonalisedTutoring() : SmallGroupTutoring()}
      </View>
    );
  };
  const FAQs = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.courseViewSmallScreen
            : personalStyles.courseView
        }
      >
        <View style={personalStyles.headerOpactiy} />
        {!groupTutor ? PersonalisedTutoringFAQ() : SmallGroupTutoringFAQs()}
      </View>
    );
  };

  const DetailsButton = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.detailsViewSmallScreen
            : personalStyles.detailsView
        }
      >
        <TouchableOpacity
          onPress={switchToCourse}
          style={personalStyles.detailsButton1} 
        >
          <Text
            style={
              isSmallScreen
                ? personalStyles.buttonCourseTextSmallScreen
                : personalStyles.buttonCourseText
            }
          >
            Course Content
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={personalStyles.detailsButton1}
          onPress={switchToFAQs}
        >
          <Text style={personalStyles.buttonCourseText2}>FAQs</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight * 1.25,
        backgroundColor: "#112230",
      }}
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
              width: screenWidth,
              height: isSmallScreen ? screenHeight * 1.25 : screenHeight * 1.35,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#080e19",
                opacity: 0.3,
                width: screenWidth,
                height: isSmallScreen
                  ? screenHeight * 1.25
                  : screenHeight * 1.35,
              }}
            />
            <View style={hpatStyles.backButton}>
              <BackButton />
            </View>
            {Header()}
            {DetailsButton()}
            {showFAQs ? FAQs() : CourseDetails()}
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
