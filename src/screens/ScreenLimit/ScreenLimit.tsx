import { StyleSheet, ImageBackground, View, TextInput } from 'react-native'
import { Text, Button } from '@rneui/themed';
import uuid from 'react-native-uuid';
import { useState } from 'react';

interface Props {
    navigation: any
  }


const ScreenLimit = ({ navigation }: Props) => {
    
    const [maxScreen, setMaxScreen] = useState('');
    
    let onChangeTextInput = (value) => {
        const numericRegex = /^([0-9])+$/
        if(numericRegex.test(value) && Number(value) <= 50) {
            setMaxScreen(value)
        }
    }

    return (
        <View style={styles.container}>
          <ImageBackground source={require('../../../assets/background.jpg')}
            style={styles.backgroundImage} imageStyle={{ opacity: 0.1 }} resizeMode="cover" >
              
              <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
              >
                <Text h4>
                    How many devices will be joining this canvas?
                </Text> 
                <TextInput
                     placeholder='Type a number here'
                     onChangeText={newValue => onChangeTextInput(newValue)}
                     value={ maxScreen }
                     textAlign='center'
                     keyboardType='numeric'
                     style={{
                        width: 250,
                        marginVertical: 10
                      }}
                /> 
                <Button
                title={'Next'}
                containerStyle={{
                  width: 200,
                  marginVertical: 10
                }}
                onPress={() => navigation.navigate('UUID', {uuidValue: uuid.v4(),
                    maxScreenNumber: maxScreen}) }
              />
                <Button
                  title={'Back'}
                  containerStyle={{
                    width: 200,
                    marginVertical: 30
                  }}
                  onPress={() => navigation.navigate('Home') }
                />
              </View>
            </ImageBackground>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1
    },
    container: {
      flex: 1
    }
  })

  export default ScreenLimit