import React from "react";
import BackButton from "../../../common/back-button";
import { View, Text, Dimensions, ScrollView, ImageBackground } from "react-native";
import { HPAT_CHANGES } from "./hpatArray";
import { hpatStyles } from "./hpatStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HPATChangesContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
    const image = {
    uri: "https://images.pexels.com/photos/33265684/pexels-photo-33265684.jpeg?_gl=1*13a9ztk*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjgzNzIkajE4JGwwJGgw",
  };

  const Array = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
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
              opacity: 0.7,
            }}
          />
          <Text style={hpatStyles.hpatTitle}>{item.title}</Text>
          <Text style={hpatStyles.hpatDesc}>{item.description}</Text>
        </View>
      </View>
    );
  };
  const displayHPAT = () => {
    return HPAT_CHANGES?.map((item, index) => {
      return Array(item, index);
    });
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
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#080e19",
              opacity: 0.6,
            }}
          />
      <View style={isSmallScreen?hpatStyles.hpatDisplayMobile:hpatStyles.hpatDisplay}>{displayHPAT()}</View>
      </ImageBackground>
              </SafeAreaView>
            </SafeAreaProvider>
    </ScrollView>
  );
}
