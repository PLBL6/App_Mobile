import { StyleSheet } from "react-native"

import colors from "../../../../../colors/colors"

const styles = StyleSheet.create({
    imageIcon: {
        height: 40,
        width: 40,
        marginRight: 10
    },
    viewOption: {
        backgroundColor: colors.whiteDarkLight,
        marginTop: 10
    },
    viewChoose: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        marginVertical: 4,
        backgroundColor: colors.white
    },
    viewTitle: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 17,
        fontWeight: "500"
    },
    textClick: {
        color: colors.whiteDark
    },
    ImageProduct: {
        height: 170,
        width: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    viewProduct: {
        padding: 10,
        backgroundColor: colors.white,
        borderWidth: 0.5,
        marginTop: 4
    },
    textBuyBack: {
        color: colors.whiteDark,
        marginVertical: 2
    },
    imageCart: {
        height: 18,
        width: 18
    },
    viewPrice: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }
})

export default styles