import { StyleSheet, ImageBackground, View } from 'react-native'
import { Text, Button } from '@rneui/themed';

interface Props {
    navigation: any,
    route: any
  }

const UUID = ({ navigation, route }: Props) => {
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
                <Text>{ route.params.uuidValue }</Text>  
                <Text>{ route.params.maxScreenNumber }</Text>  
                <Button
                    title={'Done'}
                    containerStyle={{
                        width: 200,
                        marginVertical: 10
                    }}
                    onPress={() => navigation.navigate('Dashboard') }
                />
                <Button
                  title={'Back'}
                  containerStyle={{
                    width: 200,
                    marginVertical: 30
                  }}
                  onPress={() => navigation.navigate('ScreenLimit') }
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
    },
    title: {
      color: '#F9F871',
      textAlign: 'center',
      fontFamily: 'Khmer Sangam MN', // not supported on android
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      marginTop: '25%'
    },
    registerButtonStyle: {
      alignSelf: 'center',
      width: 200
    },
    signinButtonStyle: {
      alignSelf: 'center',
      width: 200,
      marginBottom: '10%'
    },
    buttonContainer: {
      alignSelf: 'center',
      bottom: '12%',
      position: 'absolute'
    }
  })

  export default UUID