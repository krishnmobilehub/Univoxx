import { StyleSheet } from "react-native";
import {
  colors,
  grey,
  fontSize,
  fontFamily
} from "univoxx/Controller/helper/appColor.js";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.while
  },
  textStyle: {
    height: 40,
    width: "95%",
    color: "black",
    borderColor: colors.appcolor,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyleLeft: {
    height: 40,
    flex : 2,
    borderColor: colors.appcolor,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 5
    
  },
  textStyleRight: {
    height: 40,
    flex : 1,
    borderColor: colors.appcolor,
    borderWidth: 2,
    paddingRight: 10,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  viewContain: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10
  },
  viewContainButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appcolorButton,
    borderRadius: 5,
    marginTop : 20,
    marginLeft: 15,
    marginRight: 15
  },
 
  headerText: {
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold"
  },
  buttonStyle: {
    height: 50,
    width: "95%",
    color: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  },
});
