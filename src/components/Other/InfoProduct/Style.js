import { Dimensions, StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const { width } = Dimensions.get("window");
const height = 350;

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
        marginTop: 25,
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
        color: '#fff', 
        margin: 3
    },
    dotNotActive: {
        fontSize: 15, 
        color: '#888', 
        margin: 3
    },
    textNamevsPrice: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textAll: {
        fontSize: 18,
        marginLeft: 10
    },
    info: {
        marginTop: 10
    },
    info1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 5
    },
    info3: {
        flexDirection: 'row',
        marginTop: 5
    },
    textDecription: {
        fontSize: 18,
        marginTop: 15,
        color: colors.whiteDark,
        height: 140
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
    }
})

export default styles