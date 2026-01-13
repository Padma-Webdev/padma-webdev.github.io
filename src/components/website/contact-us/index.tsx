import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { courseStyles } from "../courses/styles";
import { contactStyles } from "./styles";
import { Mail, Phone } from "lucide-react";

export default function ContactUsContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
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
        style={
          isSmallScreen
            ? contactStyles.buttonViewMobile
            : contactStyles.buttonViewWeb
        }
      >
        <TouchableOpacity
          style={
            isSmallScreen
              ? contactStyles.buttonStyleMobile
              : contactStyles.buttonStyle
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=General Queries"
            );
          }}
        >
          <View style={contactStyles.buttonMargin}>
            <Mail style={contactStyles.iconStyle} />
            <Text style={contactStyles.titleText}>Email Us</Text>
            <Text style={contactStyles.subTitle}>Send us an email anytime</Text>
            <Text style={contactStyles.infoText}>contactus@medtutor.ie</Text>
          </View>
        </TouchableOpacity>
        <View
          style={
            isSmallScreen
              ? contactStyles.buttonStyleMobile
              : contactStyles.buttonStyle
          }
        >
          <View style={contactStyles.buttonMargin}>
            <Phone style={contactStyles.iconStyle} />
            <Text style={contactStyles.titleText}>Call Us</Text>
            <Text style={contactStyles.subTitle}>Mon-Fri from 8am to 6pm</Text>
            <Text style={contactStyles.infoText}>+353 874 099759</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
