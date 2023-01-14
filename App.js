import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text ,Image} from 'react-native';
 
export default class App extends Component<{}>
{
    render()
    {
        return(
  <View style={styles.container}>
        <Image
          style={{ width: 299, height: 212 }}
          source={require('./download.png')}
          // source={{
          //   uri:
          //     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          // }}
        />
        {/* If you want to show image from local directory
        <Image 
          source={require('./your-img.png')}  
          style={{width: 400, height: 400}} 
        />*/}
        <Image
          source={{
            uri:
              'file:///C:/Users/hp/Pictures/Camera%20Roll/download.png',
          }}
          style={{ width: 400, height: 400, margin: 16 }}
        />
      </View>
   
 );
  }
}
            <View style = { styles.MainContainer }>

               <Text> THIS APP FOR ADDICTED PERSON </Text>
               
               <View style={ styles.bottomView} >

                  <Text style={styles.textStyle}>LETS GO </Text>

               </View>
 
            </View>
 
       
  
 
const styles = StyleSheet.create(
  {
    MainContainer:
    
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
  
    bottomView:{

      width: '100%', 
      height: 50, 
      backgroundColor: '#0000FF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },

    textStyle:{

      color: '#fff',
      fontSize:22
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  }
});