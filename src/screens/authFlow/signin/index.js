import { View, Text ,Image} from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, TextInputs } from '../../../components'
import { appImages, routes } from '../../../services'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { HeaderAuth } from '../../../components/headers'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { Icon } from 'react-native-elements'

const SignIn = ({navigation}) => {
  return (
   <Wrapper isMain>
    <HeaderAuth />
    <KeyboardAvoiding>
    <Wrapper alignItemsCenter>
      <Spacer isTiny/>
            <Image source={appImages.splash}/>
            </Wrapper>
            <Spacer isDoubleBase/>
            <Spacer isBasic/>
            <Wrapper alignItemsCenter>
                <Text style={styles.logintext}>{"Log in to your account"}</Text>
            </Wrapper>
            <Spacer isDoubleBase/>
             <TextInputs.Colored 
          placeholder={"johndoe@email.com"}
           title={"Email"}
          />         
          <Spacer isBasic/>
          <TextInputs.Colored 
           title={"PASSWORD"}
           placeholder ="Password"
           iconNameRight={'eye'}
           iconTypeRight={'feather'}
           
          /> 
          <Wrapper alignItemsFlexEnd>
            <Text style={styles.forgot} onPress={()=>navigation.navigate(routes.resetpasswrod)}>Forgot password?</Text>
          </Wrapper>
          <Spacer isDoubleBase/>
          <Wrapper alignItemsCenter>
          <Buttons.Colored text="Log In"  textStyle={styles.button} buttonStyle={styles.btn} onPress={() => navigation.navigate(routes.app)}/>
          </Wrapper>
          </KeyboardAvoiding>
   </Wrapper>
  )
}

export default SignIn