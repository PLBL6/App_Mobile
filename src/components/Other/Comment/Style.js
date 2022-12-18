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
    info: {
        flex: 6,
        backgroundColor: colors.whiteDarkLight
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
    Image: {
        height: 50,
        width: 50,
        marginTop: 40,
        marginLeft: '46%'
    },
    view1: {
        backgroundColor: colors.white,
        paddingBottom: 10
    },
    view2: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 4,
        paddingTop: 15,
        paddingBottom: 10
    },
    option1: {
        flexDirection: 'row',
        marginHorizontal: 4,
        marginTop: 10
    },
    option1Item: {
        marginHorizontal: 3,
        width: '23.5%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNumber: {
        fontSize: 13,
        color: colors.whiteDark
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginHorizontal: 10
    },
    textAll: {
        fontSize: 19,
        color: colors.whiteDark,
        marginBottom: 15
    },
    textSaleChat: {
        fontSize: 17,
        color: colors.orangeLigth,
        marginBottom: 10
    },
    // textSaleChatComen: {
    //     fontSize: 17
    // },
    textCommen: {
        fontSize: 20,
        marginBottom: 5,
        width: '80%'
    },
    ImageComen: {
        height: 102,
        width: 102,
        margin: 3
    },
    // viewFeedback: {
    //     backgroundColor: colors.whiteDarkLight,
    //     width: '72%',
    //     padding: 15
    // },
    rating: {
        alignItems: "flex-start",
        marginVertical: 5
    }
})

export default styles