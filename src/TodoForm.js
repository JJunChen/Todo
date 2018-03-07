import React from 'react';
import { 
  View,
  TextInput, 
  TouchableOpacity, 
  Text 
} from 'react-native';

import { styles } from './styles';


export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>
);
