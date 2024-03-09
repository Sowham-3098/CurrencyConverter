import React, { useState,useEffect } from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';


//Constants
import { currencyByRupee } from './constants';
//Component
import CurrencyButton from './components/currencyBtn';
// import CurrencyConverter from './components/currencyConverter';
import Snackbar from 'react-native-snackbar';





const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('Ready to convert!')
  const [targetCurrency, setTargetCurrency] = useState('')
  
  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "white"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000",
      })
    }
  }

  return (
    <>
      <StatusBar/>
      
      <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Image source={require('../src/assets/currency.png')} style={styles.image} />
         <Text style={styles.titletext}>Indian Currency Converter</Text>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Indian  ₹</Text>
            <TextInput
           style={[
            styles.inputAmountField,
            { color: isDarkMode ? 'black' : 'black' }
          ]}
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' 
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            placeholderTextColor={isDarkMode ? 'black' : 'black'}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          style={{marginTop: 20,
          backgroundColor: '#292424',
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 2,
          borderTopColor: '#d9ead3',
          }}
          numColumns={4}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}

          />
        </View>
      </View>
      {/* <CurrencyConverter/> */}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
        width: 100,
        height: 100,
        
      },
  titletext:{
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    
  },
  titlecontainer: {
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#edbc37',
    
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#abb3a2',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#700e01',
    fontWeight: '800',
    // backgroundColor: '#700e01',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  inputAmountField: {
    height: 40,
    width: 200,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: '#abb3a2',

  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },

});

export default App;