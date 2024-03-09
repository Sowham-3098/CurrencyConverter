// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   StyleSheet,
// } from 'react-native';

// const CurrencyConverter = () => {
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('INR');
//   const [exchangeRate, setExchangeRate] = useState(0);
//   const [currencies, setCurrencies] = useState<string[]>([]);
//   const [amount, setAmount] = useState(1);

//   const convertCurrency = () => {
//     let result = (amount * exchangeRate).toFixed(2);
//     return result;
//   };

//   useEffect(() => {
//     const fetchCurrencies = async () => {
//       try {
//         const accessKey = '6d886385174567d5d9bbf0dc';
//         const response = await axios.get(`https://v6.exchangerate-api.com/v6/latest/USD`, {
//             headers: {
//               Authorization: `Bearer ${accessKey}`,
//             },
//           });
//         const data = response.data;
//         setCurrencies(Object.keys(data.rates));
//         setExchangeRate(data.rates[toCurrency]);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     fetchCurrencies();
//   }, [toCurrency]);

//   useEffect(() => {
//     const fetchCurrencies = async () => {
//       try {
//         const accessKey =  '6d886385174567d5d9bbf0dc';
       
//         const response = await axios.get(`https://v6.exchangerate-api.com/v6/latest/${fromCurrency}`, {
//           headers: {
//             Authorization: `Bearer ${accessKey}`,
//           },
//         });
//         const data = response.data;
//         setCurrencies(Object.keys(data.rates));
//         setExchangeRate(data.rates[toCurrency]);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     fetchCurrencies();
//   }, [fromCurrency, toCurrency]);


//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/currency.png')} style={styles.image} />
//       <Text style={styles.text}> Currency Converter</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Enter Amount"
//         value={amount.toString()}
//         onChangeText={(text) => setAmount(parseFloat(text))}
//       />
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={fromCurrency}
//           onValueChange={(itemValue) => setFromCurrency(itemValue)}
//           style={styles.picker}
//         >
//           {currencies.map((currency, index) => (
//             <Picker.Item label={currency} value={currency} key={index} />
//           ))}
//         </Picker>
//         <Picker
//           selectedValue={toCurrency}
//           onValueChange={(itemValue) => setToCurrency(itemValue)}
//           style={styles.picker}
//         >
//           {currencies.map((currency, index) => (
//             <Picker.Item label={currency} value={currency} key={index} />
//           ))}
//         </Picker>
//       </View>
//       <Text style={styles.result}>
//         {amount} {fromCurrency} = {convertCurrency()} {toCurrency}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     textAlign: 'center',
//     borderRadius: 5,
//     padding: 10,
//   },
//   pickerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 300,
//     marginBottom: 150,
//     alignItems: 'center',
//   },
//   picker: {
//     flex: 1,
//     height: 50,
//     marginHorizontal: 10,
//     width: 150,
//   },
//   result: {
//     fontSize: 20,
//     marginTop: 20,
//     fontWeight: 'bold',
//     color: '#700e01',
//   },
// });

// export default CurrencyConverter;
