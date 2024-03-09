import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        marginTop: 10,
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    country: {
        fontSize: 10,
        color: "#2d3436",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontStyle: "italic",
        marginTop: 5,
        marginBottom: 10,
    
    }
})

export default CurrencyButton