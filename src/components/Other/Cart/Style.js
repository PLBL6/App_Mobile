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
    view2: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 4,
        paddingTop: 15,
        paddingBottom: 10,
        height: 190
    },
    viewInfo: {
        width: '65%'
    },
    avatar: {
        height: 120,
        width: 100,
        marginLeft: 10,
        marginRight: 20
    },
    textName: {
        fontSize: 17,
        marginBottom: 5
    },
    textPrice: {
        fontSize: 20,
        marginBottom: 15,
        color: colors.dark,
        marginLeft: 5
    },
    viewCategory: {
        backgroundColor: colors.whiteDarkLight,
        height: '25%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    viewOption: {
        flexDirection: 'row',
        marginLeft: 5
    },
    viewNumber: {
        height: '47%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.whiteDark
    },
    viewMath: {
        height: '47%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.whiteDark
    },
    viewBuy: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.whiteDarkv3,
        borderTopWidth: 3,
        borderColor: colors.whiteDark
    },
    viewBuyInfo: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: colors.whiteDarkLight,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnBuy: {
        flex: 1,
        backgroundColor:colors.orangeLigth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPrice2: {
        fontSize: 19,
        color: colors.dark,
    },
    textBtnBuy: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold'
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
      },
})

export default styles