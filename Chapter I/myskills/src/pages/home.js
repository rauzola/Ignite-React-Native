/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

export function Home() {
  return (
    <>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home</Text>
      </View>
    </>
  );
}
