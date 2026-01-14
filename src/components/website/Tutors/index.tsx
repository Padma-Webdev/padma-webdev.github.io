import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { courseStyles } from "../courses/styles";
import { useNavigation } from "@react-navigation/native";
import ABBY from '../../../../public/images/ABBY.jpeg'
import JAMAL from '../../../../public/images/JAMAL.jpeg'
import ANJALI from '../../../../public/images/ANJALI.jpeg'
import BRANAVI from '../../../../public/images/BRANAVI.jpg'


export default function TutorsContainer() {
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
                justifyContent: "space-evenly",
                // width: "100%",
                // marginTop: 10,
              }
            : {
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                // marginTop: 10,
              }
        }
      >
        <View
          style={
            isSmallScreen
              ? courseStyles.courseTileMobileT
              : courseStyles.courseTileT
          }
        >
          <View>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: screenWidth * 0.8,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                      resizeMode:"contain"
                    }
                  : {
                      width: screenWidth * 0.195,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                      resizeMode:"contain"
                    }
              }
              source={(ABBY)}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Abby Murphy
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"4th Year Medical Student at Trinity College Dublin."}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Over 2,000 hours of tutoring experience, supporting 100+ students in HPAT, Maths, and Chemistry."}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Structured, clear, and student centred teaching style"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Tailors lessons to individual student needs, building confidence and exam-ready skills"}
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? courseStyles.courseTileMobileT
              : courseStyles.courseTileT
          }
        >
          <View>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: screenWidth * 0.8,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
                  : {
                      width: screenWidth * 0.195,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
              }
              source={(JAMAL)}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Jamal Elsiddig
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"1st year Medical Student at RCSI, Dublin"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Achieved top % results in both the HPAT and Leaving Certificate (2025)"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Expert tutor in HPAT, Biology, Chemistry, and Physics"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Experience in exam paper valuation and correction across multiple private institutions"}
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? courseStyles.courseTileMobileT
              : courseStyles.courseTileT
          }
        >
          <View>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: screenWidth * 0.8,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
                  : {
                      width: screenWidth * 0.195,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
              }
              source={(ANJALI)}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Anjali Bachetta
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Fourth-year medical student at the University of Oxford"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Over 6 years of tutoring experience in UCAT, BMAT, personal statements, Oxbridge interviews, MMIs, and subject-specific tutoring"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Supported students in gaining offers from Oxford and Cambridge through highly tailored guidance"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Interactive and engaging teaching style, mirroring the discussion-based Oxford tutorial system"}
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? courseStyles.courseTileMobileT
              : courseStyles.courseTileT
          }
        >
          <View>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: screenWidth * 0.8,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
                  : {
                      width: screenWidth * 0.195,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
              }
              source={(BRANAVI)}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Branavi Yogathasan
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"First-year medical student at the University of Bristol"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"4 years of tutoring experience in A Level Subjects and 1 year in UCAT and MMIs."}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"UCAT score of 3120 (top 3%) with experience attending six medical school interviews, offering strong admissions insight"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
            {"\u2022"}{" "}{"Interactive, student-focused teaching style, emphasising exam technique, problem-solving, and confidence-building"}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={
        isSmallScreen
          ? { backgroundColor: "#0F1727", width: "100%", height: "65%" }
          : { backgroundColor: "#0F1727", width: "100%", height: "47%" }
      }
    >
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>OUR EXPERT TUTORS</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Learn from the Best</Text>
        <Text style={courseStyles.footerText}>
          Our tutors are top-performing medical students with strong academic
          records and a passion for medical education.
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
      </View>
    </View>
  );
}
