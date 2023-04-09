/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [hasHelloMsg, setHasHelloMsg] = useState(false);
  const [hasWorldMsg, setHasWorldMsg] = useState(false);

  return (
    <SafeAreaView>
      <View testID="welcome">
        <Text>Welcome!</Text>
      </View>
      <Button
        testID="hello_button"
        title="Toggle Hello"
        onPress={() => setHasHelloMsg(b => !b)}
      />
      {hasHelloMsg && (
        <View>
          <Text>Hello!!!</Text>
        </View>
      )}
      <Button
        testID="world_button"
        title="Toggle World"
        onPress={() => setHasWorldMsg(b => !b)}
      />
      {hasWorldMsg && (
        <View>
          <Text>World!!!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
