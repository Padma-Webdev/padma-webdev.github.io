import React from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "../HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "./juinosStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function JuniorCertificateChangeContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/6549862/pexels-photo-6549862.jpeg?_gl=1*ubd2sz*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjk0NTIkajQ0JGwwJGgw",
  };

  const Header = () => {
    return (
      <View
        style={{
          alignSelf: "center",
          width: "100%",
          marginBottom: 10,
          borderRadius: 5,
          borderWidth: 3,
          padding: 2,
          borderColor: "#23CFBB",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#080e19",
            opacity: 0.5,
          }}
        />
        <Text style={JuniorStyles.mainText}>Irish Junior Certificate</Text>
        <Text style={hpatStyles.hpatDesc}>
          Your path to studying medicine begins with the Irish Junior
          Certificate(IJC). For students aspiring to pursue medicine in the UK,
          the Junior Certificate represents a critical foundation that
          universities carefully evaluate during the admissions process. Your
          Junior Certificate is your opportunity to prove you have the
          consistency and capability to succeed in demanding medical programmes
        </Text>
        <Text style={JuniorStyles.bullet}>
          Why Your Junior Certificate Really Matters?
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} UK medical schools look at your Junior Certificate results
          in three important ways: Interview shortlisting, Points-Based scoring
          and proof of consistence performance.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Top medical schools like Oxford, Newcastle, Queens
          Belfast(QUB) needs minimum grade in certain subjects and also assign
          points to your Junior Certificate grades.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Predicted grades are considered during UCAS application,
          but final grades must meet the offer.
        </Text>
        <Text style={JuniorStyles.bullet}>Need Guidance:</Text>
        <Text style={JuniorStyles.hpatDesc2}>
          Every UK medical school has different IJC grade requirements. MedTutor
          offers personalised advice on which grades you need for your target
          universities, ensuring you have a clear roadmap to success.
        </Text>
        <Text style={JuniorStyles.hpatDesc}>
          At MedTutor, we provide tailored advice based on your academic profile
          and university goals, helping you map out a clear, confident path to
          medical school success.
        </Text>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={
              isSmallScreen ? groupStyles.perSession : groupStyles.perSessionReg
            }
          >
            Price: €25 per session
          </Text>
        </View>
        <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                  borderRadius: 10,
                  padding: 5,
                  width: "95%",
                  alignSelf: "center",
                  marginBottom: 15,
                }
              : {
                  backgroundColor: "#2563EB",
                  borderRadius: 5,
                  padding: 5,
                  width: 900,
                  alignSelf: "center",
                  alignContent: "center",
                  marginBottom: 10,
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=Junior Certificate Tutoring"
            );
          }}
        >
          <Text style={groupStyles.Bookings}>
            Email us at contactus@medtutor.ie to book your personalised
            consultation.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
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
              }}
            />
            <View style={hpatStyles.backButton}>
              <BackButton />
            </View>

            <View
              style={
                isSmallScreen
                  ? JuniorStyles.topHeaderSmall
                  : JuniorStyles.topHeader
              }
            >
              {Header()}
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
