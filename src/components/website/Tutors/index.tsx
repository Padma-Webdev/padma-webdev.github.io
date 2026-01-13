import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { courseStyles } from "../courses/styles";
import { useNavigation } from "@react-navigation/native";

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
                width: "100%",
                marginTop: 10,
              }
            : {
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                marginTop: 10,
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
                    }
                  : {
                      width: screenWidth * 0.41,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
              }
              source={require("../../images/ABBY.jpeg")}
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
            Abby
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              Fourth-year Medical Student at Trinity College Dublin
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Strong background in teaching HPAT, Chemistry, and Mathematics
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Successfully completed the HPAT process and progressed through a
              demanding medical degree
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Extensive understanding of the academic challenges and pressures
              associated with high-stakes examinations
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Teaching approach is structured, clear, and student-centred, with
              a strong focus on exam technique, problem-solving skills, and
              building confidence
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
                      width: screenWidth * 0.41,
                      height: 450,
                      borderRadius: 5,
                      marginBottom: 20,
                    }
              }
              source={require("../../images/JAMAL.jpeg")}
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
            <Text style={{ color: "white", fontSize: 18 }}>
              First year Medical student in RCSI Dublin
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Was successful in doing both HPAT and Leaving Cert in the same
              year in 2025
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Got 173 points in the HPAT and 601 points in the leaving cert (734
              adjusted points)
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Got 4H1s in Biology, Chemistry, Physics, Maths and 2H2s in Ag
              science and PE
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Teaching approach is structured, clear, and student-centred, with
              a strong focus on exam technique, problem-solving skills, and
              building confidence
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
          ? { backgroundColor: "#0F1727", width: "100%", height: "50%" }
          : { backgroundColor: "#0F1727", width: "100%", height: "43%" }
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
