import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ukCourses } from "../courses/array";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";

export default function NavigationTop() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(true);
  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  const [moreRes, showMoreRes] = useState(false);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  useEffect(() => {}, [region]);

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  useEffect(() => {}, [hpat]);

  const regionalSwitch = () => {
    return (
      <View style={styles.reigonalSwitchView}>
        <TouchableOpacity
          style={region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchROI}
        >
          <Text style={styles.buttonText}>🇮🇪 IE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchUK}
        >
          <Text style={styles.buttonText}>🇬🇧 UK</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const courses = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
        <TouchableOpacity>
          <Text style={styles.headerText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const displayROICourses = () => {
    return (
      <View style={styles.headerSpace}>
        <TouchableOpacity onPress={() => handleHPAT()}>
          <View>
            <Text style={styles.headerText}>HPAT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>HPAT Tutoring</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Leaving Cert Grinds</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const displayUKCourses = () => {
    return ukCourses?.map((item, index) => {
      return courses(item, index);
    });
  };

  const coursesDataSwitch = () => {
    const country = region;
    return country ? displayROICourses() : displayUKCourses();
  };

  return (
    <View>
      <View style={styles.headerBackground}>
        <View style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </View>
        <View style={styles.headerContentSpace}> {coursesDataSwitch()}</View>
        <View style={styles.regswitchView}>{regionalSwitch()}</View>
      </View>
      {hpat && (
        <View
          style={{
            flex: 0.23,
            flexDirection: "column",
            width: 220,
            height: "100%",
            marginLeft: "30%",
            justifyContent: "space-evenly",
            backgroundColor: "#112230",
            borderRadius: 10,
            borderColor: "#23CFBB",
            borderWidth: 1,
            padding: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.ABOUTHPAT as never)}
          >
            <View style={{ marginTop: 2 }}>
              <Text style={styles.headerText}>About HPAT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(RoutePath.HPATDATES as never)}>
            <View style={{ marginTop: 3 }}>
              <Text style={styles.headerText}>HPAT Dates, Fees & Results</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(RoutePath.HPATCHANGES as never)}>
            <View style={{ marginTop: 3, marginBottom: 4 }}>
              <Text style={styles.headerText}>HPAT Changes from 2027 and FAQs</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
