import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';

import * as ExpoIntentLauncher from 'expo-intent-launcher';

function App(): React.JSX.Element {
  const handlePress = () => {
    ExpoIntentLauncher.startActivityAsync('android.intent.action.INSERT', {
      data: 'content://com.android.calendar/events',
      extra: {
        beginTime_dateString: '2025-05-01 12:00',
        endTime_dateString: '2025-05-01 12:00',
        title: 'Test 3vent',
        description: 'This is a test event',
        allDay: true,
      },
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="add an event to calendar" onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
