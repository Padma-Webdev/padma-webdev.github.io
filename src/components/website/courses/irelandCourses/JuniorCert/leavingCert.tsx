import React from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "../HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "./juinosStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function LeavingCertContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/8197511/pexels-photo-8197511.jpeg?_gl=1*3oei9j*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMzAwMzAkajU2JGwwJGgw",
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
        <Text style={JuniorStyles.mainText}>Leaving Certificate</Text>
        <Text style={hpatStyles.hpatDesc}>
          Medicine and Dentistry are among the most academically demanding
          degrees — achieving high Leaving Certificate grades is essential to
          secure a place. Strong results, particularly H1 and H2 grades,
          demonstrate academic excellence and are a key requirement for medical
          and dental schools in both Ireland and the UK.
        </Text>
        <Text style={JuniorStyles.bullet}>
          Why Your Leaving Certificate grades Important:
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} In Ireland, Medicine and Dentistry are primarily
          points-based, with successful applicants typically achieving multiple
          H1 grades across six subjects to meet very high cut-offs.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} In the UK, Leaving Certificate grades are used to assess
          academic strength, shortlist applicants, and confirm offers, with most
          universities requiring high H1/H2 grades, particularly in science
          subjects such as Chemistry, Biology, Physics, or Maths.
        </Text>
        <Text style={JuniorStyles.bullet}>Need Guidance:</Text>
        <Text style={JuniorStyles.hpatDesc2}>
          Your Leaving Certificate results can determine your pathway into
          Medicine or Dentistry. Grade requirements vary between universities,
          and subject combinations may differ, with some institutions accepting
          alternative science subjects.
        </Text>
        <Text style={JuniorStyles.hpatDesc}>
          MedTutor provides personalised guidance on the Leaving Certificate
          grades and subject choices needed for your target universities,
          helping you build a clear and realistic roadmap to success.
        </Text>
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
              "mailto: contactus@medtutor.ie?subject=Leaving Certificate Tutoring"
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

            <View style={JuniorStyles.topHeader}>{Header()}</View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
