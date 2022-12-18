import { StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginBottom: 5
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
        height: '100%',
        width: '100%'
    },
    view2: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 10,
        height: 200
    },
    viewInfo: {
        width: '65%'
    },
    avatar: {
        height: 120,
        width: 100,
        marginLeft: 10,
        marginRight: 15
    },
    textName: {
        fontSize: 20,
        marginBottom: 5
    },
    viewPrice: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    textPrice: {
        fontSize: 20,
        color: colors.dark,
        marginLeft: 10,
        fontWeight: "500"
    },
    textPriceDiscount: {
        fontSize: 20,
        color: colors.darkPrice,
        textDecorationLine: 'line-through',
    },
    textName2: {
        fontSize: 20,
        marginRight: '9%',
        fontWeight: "500"
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
        height: '50%',
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.whiteDark
    },
    viewMath: {
        height: '50%',
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.whiteDark
    },
    viewTotalOne: {
        flexDirection: 'row',
        paddingLeft: '4%',
        paddingVertical: 10,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        borderTopWidth: 0.5
    },
    viewBuy: {
        flex: 0.7,
        flexDirection: 'row',
        backgroundColor: colors.whiteDarkv3,
        borderTopWidth: 1,
        borderColor: colors.mainHome
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
        backgroundColor: colors.mainHome,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPrice2: {
        fontSize: 22,
        color: colors.dark,
        fontWeight: "bold"
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
    textTotalLast: {
        fontSize: 16,
        color: colors.whiteDark,
        marginBottom: 3
    },
    textsavePrice: {
        fontSize: 17,
        color: colors.dark,
        fontWeight: "400"
    },
    viewTitle: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 8
    },
    viewTitle1: {
        flexDirection: "row",
        padding: 7,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.darkPrice,
        marginVertical: 1
    },
    imageIcon: {
        height: 35,
        width: 35,
        marginRight: 10
    },
    
})

export default styles