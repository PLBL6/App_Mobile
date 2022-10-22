import { StyleSheet } from "react-native"

import colors from '../../../../colors/colors'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 700
    },
    contain: {
        paddingTop: 20,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: colors.yellowLight
    },
    SectionStyle: {
        flexDirection: 'row',
        width: 300,
        marginTop: 25,
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
    input: {
        width: 290,
        height: 40,
        paddingHorizontal: 7,
        fontSize: 20
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
        flex: 0.4, 
        backgroundColor: colors.yellowLight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categori: {
        marginHorizontal: 10
    },
    textCategory: {
        fontSize: 15
    },
    containerv2: {
        flex: 7, 
        margin: 5,
        backgroundColor: colors.productBackgrond
    },
    item: {
        borderRadius: 5,
        width: '49%',
        height: 233,
        marginHorizontal: 2,
        marginVertical: 2,
        backgroundColor: colors.white
    },
    Image: {
        height: '78%',
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    info: {
        marginHorizontal: 10
    },
    info1: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    info2: {
        flexDirection: 'row',
    },
    textName: {
        fontSize: 17
    },
    textRating: {
        marginLeft: 5,
        color: colors.dark,
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 2
    },
    textAvailable: {
        color: colors.whiteDark
    },
    textPrice: {
        color: colors.greenv2
    },
})

export default styles