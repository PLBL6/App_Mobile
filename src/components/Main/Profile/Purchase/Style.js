import { StyleSheet } from "react-native"

import colors from "../../../../../colors/colors"

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
        flex: 7,
        backgroundColor: colors.whiteDarkv3,
        marginVertical: 10
    },
    viewBill: {
        marginVertical: 5
    },
    viewChoose: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white
    },
    viewTitle: {
        flexDirection: "row",
        alignItems: 'center'
    },
    imageIcon: {
        height: 35,
        width: 35,
        marginRight: 10,
        borderRadius: 50
    },
    textClick: {
        color: colors.orangeLigth,
        fontSize: 20
    },
    textTitle1: {
        fontSize: 20,
        fontWeight: "500"
    },
    ImageProduct: {
        height: 100,
        width: 100,
        marginRight: 15
    },
    viewInfo: {
        flex: 1
    },
    viewProduct: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 15,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.whiteDarkv3
    },
    viewTitle1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    textName: {
        fontSize: 20,
        fontWeight: "490"
    },
    textSize: {
        fontSize: 17,
        color: colors.whiteDark
    },
    ViewLoading: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles