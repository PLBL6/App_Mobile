import { Dimensions, StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const { width } = Dimensions.get("window");
const height = 400;

const styles = StyleSheet.create({
    container: {
        width, 
        height,
        flex: 1,
        backgroundColor: colors.white
    },
    btnBack: {
        position: 'absolute', 
        alignSelf: 'flex-start',
        marginTop: 40,
        marginLeft: 10
    },
    iconArrow: {
        height: 40,
        width: 40
    },
    image: {
        width, 
        height, 
        resizeMode: 'cover'
    },
    scrollView: {
        width, 
        height
    },
    dotView: {
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },
    dotActive: {
        fontSize: 15, 
        color: colors.orangeLigth, 
        margin: 3
    },
    dotNotActive: {
        fontSize: 15, 
        color: colors.white, 
        margin: 3
    },
    textName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.pink
    },
    textPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.whiteDarkv3
    },
    textSale: {
        fontSize: 15,
        color: colors.whiteDarkv2
    },
    textRating: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
        color: colors.dark
    },
    info: {
        marginTop: 13
    },
    info2: {
        marginHorizontal: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 13
    },
    info3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 3
    },
    textDecription: {
        fontSize: 18,
        marginTop: 10,
        color: colors.whiteDark
    },
    btnSubmit: {
        alignSelf: 'center',
        backgroundColor: colors.pink,
        height: 45,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        bottom: 0
    },
    textBtn: {
        color: colors.white,
        fontWeight: 'bold'
    },
    container1: {
        flex: 9
    },
    container2: {
        flex: 0.8,
        justifyContent: 'center'
    },
    viewInfo1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15
    },
    viewInfo2: {
        flex: 1,
        borderWidth: 3,
        borderTopColor: colors.white,
        borderBottomColor: colors.white,
        borderRightColor: colors.white,
        borderLeftColor: colors.whiteDark,
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    viewOptionBig: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    viewOption: {
        marginVertical: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderTopColor: colors.whiteDark,
        borderBottomColor: colors.white,
        borderRightColor: colors.white,
        borderLeftColor: colors.white
    },
    viewShop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderTopColor: colors.whiteDark,
        borderBottomColor: colors.white,
        borderRightColor: colors.white,
        borderLeftColor: colors.white,
    },
    textMota: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    iconMap: {
        height: 20,
        width: 20,
        marginLeft: 20,
        marginRight: 7
    },
    name: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15
    },
    textMap: {
        fontSize: 20
    },
    textBtnViewShop: {
        fontSize: 20,
        color: colors.orange
    },
    btnViewShop: {
        height: 40,
        width: 120,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.orange

    },
    iconArrowRating: {
        height: 18,
        width: 18,
        marginLeft: 5,
        color: colors.green
    }
})

export default styles