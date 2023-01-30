import { TouchableOpacity, Text } from 'react-native';

import { COLOURS } from '../utils/colours';

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOURS.white,
    borderWidth: 2,
  },
  text: {
    color: COLOURS.white,
    fontSize: size / 3,
  },
});

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
