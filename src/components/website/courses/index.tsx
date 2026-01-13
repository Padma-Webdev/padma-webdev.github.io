import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { courseStyles } from "./styles";
// import { courseData } from "./array";
import { Contact, NotebookTabsIcon, SquareUserRound } from "lucide-react";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";

export default function CoursesContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const courseTile = () => {
    const navigation = useNavigation();
    return (
      <View
        style={
          isSmallScreen
            ? {
                flexDirection: "column",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 10,
              }
            : {
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 10,
              }
        }
      >
        <TouchableOpacity
          style={
            isSmallScreen
              ? courseStyles.courseTileMobile
              : courseStyles.courseTile
          }
          onPress={() => navigation.navigate(RoutePath.GROUPPREP as never)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            HPAT Preparation
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Elite Mentorship: Learn from expert tutors at Trinity and RCSI."
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {"Personalised Coaching: Bespoke 1-to-1 or small group tuition."}
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "⁠Intensive Courses: Two-day programs held in June and December 2026."
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Strategic Feedback: Custom study plans with constant progress monitoring."
              }
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            isSmallScreen
              ? courseStyles.courseTileMobile
              : courseStyles.courseTile
          }
          onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Leaving Cert Grinds
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Expert 1-to-1 Tutoring: Master Maths, Chemistry, and Biology with specialists."
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Personalised Study Plans: Bespoke roadmaps tailored to your academic goals."
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Ultimate Flexibility: No rigid timetables—book sessions around your schedule."
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Proven Results: Focused support to help you maximise your points."
              }
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            isSmallScreen
              ? courseStyles.courseTileMobile
              : courseStyles.courseTile
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=UK Medicine Admissions"
            );
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            UK Medicine Admissions
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "UCAT Tutoring: 1-to-1 or small group tutoring by Oxford and Bristol Students"
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Application Support: Professional guidance for Personal Statements and WEx"
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Strategic Consulting: Help choosing your 4 medical universities and UCAS"
              }
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              {"\u2022"}{" "}
              {
                "Interview Mastery: MMI and panel interview prep with expert doctors and tutors."
              }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View
      style={
        isSmallScreen
          ? courseStyles.mainContainerMobile
          : courseStyles.mainContainer
      }
    >
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>WHY CHOOSE MEDTUTOR</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Everything You Need to Succeed</Text>
        <Text style={courseStyles.footerText}>
          Our platform combines expert guidance with cutting-edge learning tools
          to help you achieve your medical career goals.
        </Text>
      </View>
      <View style={courseStyles.mainView}>
        <View
          style={
            isSmallScreen
              ? courseStyles.smallScreentileone
              : courseStyles.webscreenone
          }
        >
          {courseTile()}
        </View>
        {/* <View
          style={isSmallScreen
              ? courseStyles.smallScreentiletwo
              :courseStyles.webscreentwo}
        >
          {displayTileTwo()}
        </View> */}
      </View>
    </View>
  );
}
