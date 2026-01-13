import { StyleSheet } from "react-native";

export const hpatStyles = StyleSheet.create({
  mainScroll: { flex: 1, backgroundColor: "#091121" },
  hpatTitle: {
    fontSize: 25,
    color: "#f8fefe",
    fontWeight: "600",
    marginBottom: 10,
    padding:10,
    alignSelf:"center"
  },
    hpatDesc: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 10,
    marginLeft: 25,
  },
      hpatDescDates: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 10,
    marginLeft: 25,
    alignSelf:"center"
  },
  hpatDesc2: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 25,
    marginLeft: 25,
  },
  backButton: {
    marginLeft: 40,
    height: "10%",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "5%",
  },
  hpatDisplay: {
    width: "75%",
    height: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
    hpatDisplayMobile: {
    width: "95%",
    height: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
});
