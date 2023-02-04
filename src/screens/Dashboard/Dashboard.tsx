import { StyleSheet, ImageBackground, View, TextInput } from 'react-native'
import { Text, Button } from '@rneui/themed';
import { useState } from 'react';
import { MyTabs } from '../../components/TabNavigation'

interface Props {
    navigation: any
    route: any
  }


const Dashboard = ({ navigation, route }: Props) => {
    
    const [maxScreen, setMaxScreen] = useState('');
    

    return (
        <View style={styles.container}>
          
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

  export default Dashboard