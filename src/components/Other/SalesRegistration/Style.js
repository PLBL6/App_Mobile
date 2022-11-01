import { StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row'
  },
  iconArrow: {
    height: 20,
    width: 20,
    marginTop: 50,
    marginLeft: 15
  },
  textTitle: {
    marginTop: 42,
    fontSize: 25,
    marginLeft: 20
  },
  info: {
    flex: 6,
    backgroundColor: colors.whiteDarkLight
  },
  iteamName: {
    marginVertical: 15,
    padding: 15,
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'space-between'
  },
  iteamInfo: {
    marginVertical: 2,
    padding: 15,
    backgroundColor: colors.white,
    justifyContent: 'space-between'
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewRow1: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  viewBuy: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 5,
    borderColor: colors.whiteDarkv3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAll: {
    fontSize: 17
  },
  iconArrowRight: {
    height: 20,
    width: 20
  },
  textLong: {
    fontSize: 17
  },
  btnDK: {
    height: '60%',
    width: 350,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 20,
    color: colors.white
  }
})

export default styles