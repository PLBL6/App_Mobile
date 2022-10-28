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
        width: 25,
        height: 25,
        resizeMode: 'cover',
      },
})

export default styles