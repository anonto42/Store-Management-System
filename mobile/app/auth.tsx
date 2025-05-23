import Loader from '@/components/Loader';
import { styleSheet } from '@/constants/styling';
import { myContext } from '@/lib/AuthContext';
import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';

export default function LoginScreen() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, loading } = myContext();

  return (
    <View style={styleSheet.main_bg}>
      { loading && <Loader />}
      <View style={styleSheet.auth_container}>
        <Text style={styleSheet.auth_header}>Username:</Text>
        <TextInput style={styleSheet.auth_inp} onChangeText={setEmail} value={username} placeholder="Write hear" />
        <Text style={styleSheet.auth_header}>Password:</Text>
        <TextInput
          placeholder="Write hear"
          secureTextEntry
          style={styleSheet.auth_inp}
          onChangeText={setPassword}
          value={password}
        />
        <Pressable style={styleSheet.auth_button} onPress={()=> signin({username, password})}>
          <Text style={styleSheet.auth_button_text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}