import { TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, TextInputs } from '../../../components'
import { styles } from './style'
import { takePhotoFromCamera } from '../../../services/helpingMethods'
import { appImages, colors, routes } from '../../../services'
import Spacer from '../../../components/spacer'
import { HeaderAuth } from '../../../components/headers'
import Input, { PhoneInputComp } from '../../../components/smallcomponents'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { Icon } from 'react-native-elements'

const SignUp = ({ navigation, route }) => {
  console.log(route?.params?.screen)
  //useState 
  const [profile, setProfile] = useState(null)
  //Function of Camer 
  const openCamera = async () => {
    let image = await takePhotoFromCamera()
    if (image) {
      console.log(image?.path)
      setProfile(image)
    }
  }
  useEffect(() => {
    console.log('first,', profile)
  }, [])
  console.log(route?.params?.screen, 'Edit')
  return (
    <Wrapper isMain background1 >
      <HeaderAuth Title={
        route?.params?.screen == 'editProfile' ? "Edit Profil" : "Create an account"} />
      <KeyboardAvoiding >
        <Spacer isBasic />
        <TouchableOpacity onPress={openCamera} >
          <Wrapper alignItemsCenter justifyContentCenter >
            <Wrapper isImageBackground source={profile != null ? { uri: profile?.path } : appImages.profile} style={styles.imagestylewrapper}>
              <Icon name='camera' type='feather' size={25} color={colors.appBgColor1} />
            </Wrapper>
          </Wrapper>
        </TouchableOpacity>
        <Spacer isBasic />
        <Wrapper style={styles.inputwrapper} flexDirectionRow justifyContentSpaceBetween>
          <Wrapper flexDirectionRow style={styles.Wrapper}>
            <Input label="FIRST NAME" placeholder="First Name" />
          </Wrapper>
          <Wrapper flexDirectionRow style={styles.Wrapper}>
            <Input label="LAST NAME" placeholder="Last Name" />
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        <TextInputs.Colored placeholder={"johndoe@email.com"} title={"Email"} />
        <Spacer isBasic />
        <PhoneInputComp title="PHONE NUMBER" />
        <Spacer isBasic />
        {route?.params?.screen == 'editProfile' ? null :
            <Wrapper>
              <TextInputs.Colored title={"PASSWORD"} placeholder="Password" iconNameRight={'eye'}
                iconTypeRight={'feather'} />
              <Spacer isBasic />
              <TextInputs.Colored title={"CONFIRM PASSWORD"} placeholder="Confirm Password" iconNameRight={'eye'}
                iconTypeRight={'feather'} />
              <Spacer isDoubleBase />
            </Wrapper>}
      </KeyboardAvoiding>
      <Wrapper style={styles.btnwrapper} alignItemsCenter>
        <Buttons.Colored text={
          route?.params?.screen == 'editProfile' ? "Save Change" : "Sign Up"} textStyle={styles.button} buttonStyle={styles.btn} onPress={() => navigation.navigate(routes.shapes)} />
      </Wrapper>
    </Wrapper>
  )
}
export default SignUp