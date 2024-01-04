import React from 'react';
import { View, Button } from 'react-native';

const ButtonComponent = ({ onPress }) => {
  return (
    <View>
      <Button title="Run OtherComponent Data" onPress={onPress} />
    </View>
  );
};

export default ButtonComponent;
