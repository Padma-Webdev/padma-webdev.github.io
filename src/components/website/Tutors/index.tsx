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
                // width: "100%",
                // marginTop: 10,
              }
            : {
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                // marginTop: 10,
              }
        }
      >
        {/* <View
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
        </View> */}
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
            Abby Murphy
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              Abby is a fourth-year medical student at Trinity College Dublin
              with a strong background in teaching HPAT, Chemistry, and
              Mathematics. Having successfully navigated the HPAT process
              herself and progressed through a demanding medical degree, she has
              a deep understanding of both the academic challenges students face
              and the pressure associated with high-stakes examinations.
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Her teaching approach is structured, clear, and student-centred,
              with a strong emphasis on exam technique, effective
              problem-solving strategies, and building student confidence. Abby
              tailors her lessons to each student’s needs, helping them develop
              both the skills and self-assurance required to perform at their
              best.
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
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>
              Jamal Elsiddig is a first-year medical student at the Royal
              College of Surgeons in Ireland (RCSI), Dublin. In 2025, she
              successfully completed both the HPAT and the Leaving Certificate
              in the same year, achieving an HPAT score of 173 and 601 Leaving
              Certificate points (734 adjusted points).
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              He attained H1 grades in Biology, Chemistry, Physics, and
              Mathematics, along with H2 grades in Agricultural Science and
              Physical Education, demonstrating strong academic ability across
              both scientific and applied subjects. Jamal’s academic
              achievements reflect her discipline, resilience, and commitment to
              pursuing a career in medicine.
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
              source={require("../../images/ANJALI.jpeg")}
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
            <Text style={{ color: "white", fontSize: 18 }}>
              Anjali is a fourth-year medical student at Worcester College,
              University of Oxford, with over six years of tutoring experience
              across all levels, from primary school to university admissions.
              She has helped students gain offers from Oxford and Cambridge,
              offering tailored support for UCAT preparation, interviews,
              personal statements, and subject-specific tutoring.
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Her teaching is interactive and engaging, mirroring the
              discussion-based Oxford tutorial style. Lessons focus on deep
              understanding, critical thinking, and confidence-building, with
              structured recaps to reinforce key concepts and ensure long-term
              retention.
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
              source={require("../../images/BRANAVI.jpg")}
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
            <Text style={{ color: "white", fontSize: 18 }}>
              Branavi Yogathasan is a first-year medical student at the
              University of Bristol with four years of tutoring experience. She
              scored 3120 in the UCAT (top 3%) and has attended six medical
              school interviews, giving her firsthand insight into the
              admissions process.
            </Text>
            <Text style={{ color: "white", marginTop: 8, fontSize: 18 }}>
              Her teaching is interactive and student-focused, emphasizing exam
              technique, problem-solving, and confidence-building, with
              structured recaps to reinforce key concepts.
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
