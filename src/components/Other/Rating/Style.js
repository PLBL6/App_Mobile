import { StyleSheet } from "react-native"

import colors from "../../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        textAlign: 'center',
      },
      ratingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
      },
      imageStyle: { 
        width: 22,
        height: 22,
        resizeMode: 'cover',
      },
})

export default styles