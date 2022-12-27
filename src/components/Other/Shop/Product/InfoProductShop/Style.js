import { Dimensions, StyleSheet } from "react-native"

import colors from "../../../../../../colors/colors"

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
    btnCart: {
        position: 'absolute', 
        alignSelf: 'flex-end',
        marginTop: 45,
        right: 10
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
        color: colors.whiteDark
    },
    textSale: {
        fontSize: 15,
        color: colors.whiteDarkv2
    },
    textSaleSelected: {
        fontSize: 15,
        color: colors.dark
    },
    textRating: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
        marginRight: 2
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
        marginLeft: 8,
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
        borderTopWidth: 2,
        borderColor: colors.whiteDark
    },
    viewShop: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderTopWidth: 2,
        borderColor: colors.whiteDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMota: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    iconMap: {
        height: 25,
        width: 25,
        marginRight: 3
    },
    shopinfo: {
        paddingHorizontal: 20
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.orange
    },
    iconArrowRating: {
        height: 18,
        width: 18,
        color: colors.green
    },
    viewPhanloai: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    selected: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.dark
    },
    unselected: {
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1
    },
    phanloai1: {
        padding: 5,
        margin: 6
    },
    viewTop: {
        padding: 5,
        width: 150,
        height: 200,
        backgroundColor: colors.white,
        borderWidth: 1,
        marginTop: 4
    },
    hinhAnhTop: {
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    viewTopInfo: {
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    viewToprow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles