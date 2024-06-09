import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationTypes} from '../../types/Types';
import styles from '../../styles/Global';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

interface SigninScreenState {
  userName: string;
}
interface ValidationError {
  inner: Array<{
    path: string;
    message: string;
  }>;
}

const signinEmailSchema = Yup.object().shape({
  userName: Yup.string().email('Invalid email').required('Email is required'),
});

const LoginScreen = ({navigation}: NavigationTypes) => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const [state, setState] = useState<SigninScreenState>({
    userName: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {userName} = state;

  const updateState = (data: SigninScreenState) =>
    setState(state => ({...state, ...data}));

  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={styles.searchContainer}>
      <View style={styles.loginScreen}>
        <View style={styles.loginLogoView}>
          <Image
            source={require('../../assets/images/orbitwalletlogo.png')}
            style={styles.loginLogo}
          />
        </View>
        <View style={styles.userFields}>
          {UserName()}
          {SigninButton()}
        </View>
      </View>
    </LinearGradient>
  );

  function UserName() {
    const isFieldValid = (field: string) => {
      let check = validationErrors[field];
      return check;
    };

    return (
      <>
        <TextInput
          value={userName}
          style={styles.textFieldWrapStyle}
          placeholder="Enter your email"
          placeholderTextColor="#301E5B"
          onChangeText={text => {
            updateState({userName: text});
            if (isFieldValid('userName')) {
              setValidationErrors(prevErrors => {
                const newErrors = {...prevErrors};
                delete newErrors.userName;
                return newErrors;
              });
            }
          }}
        />
        {validationErrors.userName && (
          <Text style={styles.errors}>{validationErrors.userName}</Text>
        )}
      </>
    );
  }

  function SigninButton() {
    const handleSignup = async () => {
      try {
        setIsLoading(true);
        await signinEmailSchema.validate(state, {abortEarly: false});
        setTimeout(() => {
          navigation.push('App');
          setIsLoading(false);
        }, 500);
      } catch (error) {
        if ((error as ValidationError).inner) {
          const errors: {[key: string]: string} = {};
          (error as ValidationError).inner.forEach(err => {
            errors[err.path] = err.message;
          });
          setValidationErrors(errors);
          setIsLoading(false);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleSignup()}
        style={styles.signinButtonStyle}>
        {isLoading ? (
          <ActivityIndicator size={26} color="white" />
        ) : (
          <Text style={styles.signin}>Signin</Text>
        )}
      </TouchableOpacity>
    );
  }
};

export default LoginScreen;
