import { StyleSheet } from "react-native"

import colors from '../../../../colors/colors'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 800
    },
    contain: {
        paddingTop: '3%',
        flexDirection: 'row',
        flex: 0.7,
        backgroundColor: colors.orangeLigth,
        paddingBottom: 10
    },
    SectionStyle: {
        flexDirection: 'row',
        width: '75%',
        marginTop: 25,
        borderWidth: 1,
        borderColor: colors.main,
        backgroundColor: colors.white,
        height: 40,
        borderRadius: 30 ,
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
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    containerv1: {
        flex: 1.15,
        backgroundColor: colors.productBackgrond
    },
    categori: {
        backgroundColor: colors.orangeLigth,
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: 'center'
    },
    viewImageCategory: {
        backgroundColor: colors.white,
        marginBottom: 5,
        padding: 5,
        borderRadius: 10
    },
    ImageCategory: {
        height: 50,
        width: 50
    },
    textCategory: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.white
    },
    containerv2: {
        flex: 7, 
        paddingRight: 2,
        backgroundColor: colors.productBackgrond
    },
    item: {
        borderRadius: 5,
        width: '50%',
        height: 280,
        margin: 2,
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
    }
})

export default styles