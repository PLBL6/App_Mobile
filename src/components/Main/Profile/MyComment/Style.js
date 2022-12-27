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
    view2: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 4,
        paddingTop: 15,
        paddingBottom: 10
    },
    optionReview: {
        marginHorizontal: 3,
        backgroundColor: colors.mainHome,
        width: '23.5%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textReview: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.white
    },
    textAll: {
        fontSize: 19,
        color: colors.whiteDark
    },
    textSaleChat: {
        fontSize: 17,
        color: colors.orangeLigth,
        marginBottom: 10
    },
    textCommen: {
        fontSize: 20,
        marginBottom: 5
    },
    ImageComen: {
        height: 102,
        width: 102,
        margin: 3
    },
    rating: {
        alignItems: "flex-start",
        marginVertical: 5
    },
    ViewLoading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textName: {
        fontSize: 17
    },
    viewBig: {
        justifyContent: 'space-between',
        paddingLeft: 20
    }
})

export default styles