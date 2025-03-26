import { Text,StyleSheet,ImageBackground,SafeAreaView, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const coFfeePicture = require("@/assets/images/dani-ZLqxSzvVr7I-unsplash.jpg")

const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      style={styles.image}
      resizeMode='cover'
      source={coFfeePicture}>
        <Text style={styles.text}>Coffe Shop</Text>
        <Link style={styles.button} href={"/contact"} asChild>
            <Pressable>
                <Text style={styles.btnText}>Contact us</Text>
            </Pressable>
        </Link>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default app


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
    justifyContent:"center"
  },
  text:{
    marginTop:40,
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
  },
  button:{
    backgroundColor:"rgba(0,0,0,0.2)",
  },
  btnText:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
  }
})