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
    viewInfo: {
        flex: 7,
        backgroundColor: colors.whiteDarkLight,
        marginVertical: 10
    },
    containerv2: {
        padding: 3,
        backgroundColor: colors.productBackgrond
    },
    item: {
        borderRadius: 5,
        width: '48%',
        height: 280,
        margin: 4,
        backgroundColor: colors.white
    },
    Image: {
        height: '75%',
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    discout: {
        height: 50,
        width: 50,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: colors.yellowLight,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomStartRadius: 15
    },
    textName: {
        fontSize: 17
    },
    textAvailable: {
        fontSize: 15
    },
    textPrice: {
        fontSize: 20,
        color: colors.orange
    },
    textDiscount: {
        fontSize: 15,
        color: colors.orange
    },
    textGIAM: {
        fontSize: 15,
        color: colors.white
    },
    info: {
        marginHorizontal: 10,
        paddingTop: 10
    },
    info1: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default styles