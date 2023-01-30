import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import RoundedButton from '../components/RoundedButton';

import { SPACING } from '../utils/sizes';

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: SPACING.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  button: {
    justifyContent: 'center',
  },
});

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label='What would you like to focus on?'
          onChangeText={setSubject}
        />
        <View style={styles.button}>
         <RoundedButton title='+' size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

export default Focus;
