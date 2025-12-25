import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
// import RegionSwitch from "../common/regionSwitch";

export default function Navigation() {
  return (
    <View>
      <View style={styles.headerBackground}>
        <TouchableOpacity style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
        <View style={styles.headerContentSpace}>
          <TouchableOpacity>
            <Text style={styles.headerText}>HPAT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Leaving Cert Grinds</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Junior Cert Grinds</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Application Packages</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Free Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>More</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
            <RegionSwitch/>
        </View> */}
      </View>
    </View>
  );
}
