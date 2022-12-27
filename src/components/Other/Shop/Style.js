import { StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 2,
    backgroundColor: colors.white
  },
  iconArrow: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
    marginTop: 15
  },
  info: {
    flex: 6,
    backgroundColor: colors.whiteDarkLight
  },
  SectionStyle: {
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.white,
    height: 40,
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    paddingLeft: 5
  },
  input: {
    width: 290,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 17
  },
  ImageStyle: {
    padding: 10,
    margin: 7,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  view1: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: '7%'
  },
  viewShop: {
    flex: 1.5,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    flex: 1,
    height: 80,
    width: 80,
    borderRadius: 100,
    marginHorizontal: 15
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    width: '70%'
  },
  textMap: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold"
  },
  textAll: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
    borderLeftWidth: 2,
    paddingLeft: 5,
    borderLeftColor: colors.white
  },
  iconMap: {
    height: 15,
    width: 15,
    marginRight: 7
  },
  Info: {
    flex: 2.5
  },
  view2: {
    flex: 1.1,
    paddingRight: 15,
    height: '100%',
    justifyContent: 'center'
  },
  text: {
    color: colors.main,
    fontSize: 12
  },
  iconStar: {
    height: 15,
    width: 15,
    marginRight: 2
  }
})

export default styles