import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, Platform } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";
import logo from "../../../../public/images/logo.png";

type PdfLinkProps = {
  label: string;
  pdfPath: string; // e.g. "/pdfs/terms.pdf"
};

  const isDev = process.env.NODE_ENV === "development";
  const BASE_URL = isDev ? "" : "/MedTutor"; // empty in dev, repo prefix in prod

export const PdfLink: React.FC<PdfLinkProps> = ({ label, pdfPath }) => {
  const isDev = process.env.NODE_ENV === "development";
  const BASE_URL = isDev ? "" : "/MedTutor";
  const openPdf = () => {
    if (Platform.OS === "web") {
      window.open(`${BASE_URL}${pdfPath}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <TouchableOpacity onPress={openPdf}>
      <View style={{ marginTop: 2, marginBottom: 2 }}>
        <Text style={styles.headerText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function NavigationTop() {
  const navigation = useNavigation();
  // const [region, setRegion] = useState(true);
  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  // const [moreRes, showMoreRes] = useState(false);
  // const regionSwitchROI = () => {
  //   setRegion(true);
  // };
  // const regionSwitchUK = () => {
  //   setRegion(false);
  //   showHpat(false);
  //   showHpatTutor(false);
  //   showLeaveCert(false);
  //   showfreeRes(false);
  //   showMoreRes(false);
  // };

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    // showMoreRes(false);
  };

  const handleHPATTutoring = () => {
    showHpat(false);
    showHpatTutor(true);
    showLeaveCert(false);
    showfreeRes(false);
    // showMoreRes(false);
  };

  const handleleavingCert = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(true);
    showfreeRes(false);
    // showMoreRes(false);
  };

  const handleFreeResources = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(true);
  };

  useEffect(() => {}, [hpat]);
  useEffect(() => {}, [hpatTutor]);
  useEffect(() => {}, [freeRes]);
  useEffect(() => {}, [leaveCert]);
  // useEffect(() => {}, [region]);

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

  // const courses = (item: any, index: any) => {
  //   return (
  //     <View key={index.toString()}>
  //       <TouchableOpacity>
  //         <Text style={styles.headerText}>{item.title}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  const displayROICourses = () => {
    return (
      <View style={styles.headerSpace}>
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
        <TouchableOpacity onPress={() => handleFreeResources()}>
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
    <View>
      <View style={styles.headerBackground}>
        <TouchableOpacity
          style={styles.logoSpace}
          onPress={() => navigation.navigate(RoutePath.Home as never)}
        >
          <Image source={{ uri: `${BASE_URL}/images/logo.png` }} style={styles.headerLogo} />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
        <View style={styles.headerContentSpace}> {displayROICourses()}</View>
        {/* <View style={styles.regswitchView}>{regionalSwitch()}</View> */}
      </View>
      {hpat && (
        <View style={styles.hpatDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.ABOUTHPAT as never)}
          >
            <View style={{ marginTop: 2 }}>
              <Text style={styles.headerText}>About HPAT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.HPATCHANGES as never)}
          >
            <View style={{ marginTop: 3, marginBottom: 4 }}>
              <Text style={styles.headerText}>HPAT Changes - 2027</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {hpatTutor && (
        <View style={styles.hpatTutoringDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.GROUPPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                1:1 & Small Group HPAT Preparation(Online)
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.WEEKPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                2 Days and 8 Week HPAT Preparation Course
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {leaveCert && (
        <View style={styles.JuniorDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Leaving Certificate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Junior Certificate</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {freeRes && (
        <View style={styles.FreeResView}>
          {/* <TouchableOpacity onPress={() => downloadPDF("Section 1.pdf")}>
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Section 1</Text>
            </View>
          </TouchableOpacity> */}
          <PdfLink label="Section 1" pdfPath="/pdfs/Section1.pdf" />
          <PdfLink
            label="HPAT Scoring Guide"
            pdfPath="/pdfs/HPAT_Scoring_Guide.pdf"
          />
          <PdfLink
            label="HPAT Changes 2027"
            pdfPath="/pdfs/HPAT_Changes_2027.pdf"
          />
          {/* <TouchableOpacity
            onPress={() => downloadPDF("HPAT Scoring Guide.pdf")}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>HPAT Scoring Guide</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => downloadPDF("HPAT Changes 2027.pdf")}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>HPAT Changes 2027</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
}
