import { View, Text } from "react-native";
import { courseStyles } from "../courses/styles";
import { contactStyles } from "./styles";
import useDimensions from "../common/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../navigation/style";

export default function ContactUsContainer() {
  const dimensions = useDimensions();
  const screenWidth = dimensions.window.width;
  const isSmallScreen = screenWidth < 720;
  return (
    <View
      style={
        isSmallScreen
          ? contactStyles.mainContainerMobile
          : contactStyles.mainContainer
      }
    >
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>Get In Touch</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Contact Us</Text>
        <Text style={courseStyles.footerText}>
          Have questions? We're here to help. Reach out to our team and we'll
          get back to you as soon as possible.
        </Text>
      </View>
      <View
        style={{
          width: "55%",
          height: "40%",
          marginTop: 20,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#0F1727",
            width: "30%",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#06443e",
          }}
        >
          <LinearGradient
            style={{
              flex: 1,
              borderRadius: 15,
            }}
            colors={["#091121", "#112e36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          ></LinearGradient>
        </View>
        <View
          style={{
            backgroundColor: "#0F1727",
            width: "30%",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#06443e",
          }}
        >
          <LinearGradient
            style={{
              flex: 1,
              borderRadius: 15,
            }}
            colors={["#091121", "#112e36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          ></LinearGradient>
          
        </View>
        <View
          style={{
            backgroundColor: "#0F1727",
            width: "30%",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#06443e",
          }}
        >
          <LinearGradient
            style={{
              flex: 1,
              borderRadius: 15,
            }}
            colors={["#091121", "#112e36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          ></LinearGradient>
        </View>
      </View>
    </View>
  );
}
