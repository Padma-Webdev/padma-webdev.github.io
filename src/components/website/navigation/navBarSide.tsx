import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, Modal } from "react-native";
import { styles } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ukCourses } from "../courses/array";
import { RoutePath } from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";
import logo from '../../../../public/images/logo.png'

export default function NavigationSide() {
  const navigation = useNavigation();
  // const [region, setRegion] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const show = () => setModalVisible(true);
  const close = () => setModalVisible(false);
  // const regionSwitchROI = () => {
  //   setRegion(true);
  // };
  // const regionSwitchUK = () => {
  //   setRegion(false);
  // };

  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  const [moreRes, showMoreRes] = useState(false);

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  const handleHPATTutoring = () => {
    showHpat(false);
    showHpatTutor(true);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  const handleleavingCert = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(true);
    showfreeRes(false);
    showMoreRes(false);
  };

  useEffect(() => {}, [hpat]);
  useEffect(() => {}, [hpatTutor]);
  // useEffect(() => {}, [region]);

  const handleOnPress = () => {
    // navigation.navigate(RoutePath.HPAT as never)
    setModalVisible(false);
  };

  useEffect(() => {}, [modalVisible]);

  // const regionalSwitch = () => {
  //   return (
  //     <View style={styles.reigonalSwitchView}>
  //       <TouchableOpacity
  //         style={region ? styles.activeRegion : styles.switchButton}
  //         onPress={regionSwitchROI}
  //       >
  //         <Text style={styles.buttonText}>🇮🇪 IE</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={!region ? styles.activeRegion : styles.switchButton}
  //         onPress={regionSwitchUK}
  //       >
  //         <Text style={styles.buttonText}>🇬🇧 UK</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const courses = (item: any, index: any) => {
    return (
      <View style={styles.headerContentSpaceMobile} key={index.toString()}>
        <TouchableOpacity onPress={() => handleOnPress()}>
          <Text style={styles.headerTextMobile}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const displayROICourses = () => {
    return (
      <View style={styles.headerSpaceMobile}>
        <TouchableOpacity onPress={() => handleHPAT()}>
          <View>
            <Text style={styles.headerText}>HPAT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleHPATTutoring()}>
          <View>
            <Text style={styles.headerText}>HPAT Tutoring</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleleavingCert()}>
          <View>
            <Text style={styles.headerText}>Leaving Cert Grinds</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  // const displayUKCourses = () => {
  //   return ukCourses?.map((item, index) => {
  //     return courses(item, index);
  //   });
  // };

  // const coursesDataSwitch = () => {
  //   const country = region;
  //   return country ? displayROICourses() : displayUKCourses();
  // };

  return (
    <>
      <View style={styles.headerBackgroundMobile}>
        <TouchableOpacity
          style={styles.logoSpace}
          onPress={() => navigation.navigate(RoutePath.Home as never)}
        >
          <Image
             source={(logo)}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.smallScreenHeader} onPress={show}>
            <MenuIcon width={12} height={10} sx={{ color: "#f8fefe" }} />
          </TouchableOpacity>
          <Modal visible={modalVisible} transparent>
            <View
              style={{
                flex: 1,
                backgroundColor: "#112230",
                marginLeft: "15%",
                height: "120%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <View
                  style={{
                    marginTop: "3%",
                    width: "30%",
                    height: "100%",
                    marginLeft: "5%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {regionalSwitch()}
                </View> */}
                <TouchableOpacity
                  onPress={close}
                  style={{
                    marginTop: "4%",
                    width: "15%",
                    height: "80%",
                    marginLeft: "75%",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon
                    sx={{ color: "#f8fefe", width: "70%", height: "80%" }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", height: "45%", margin: "1%" }}>
                {displayROICourses()}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
}
