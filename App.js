import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        alert('Hi');
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            borderColor: 'red',
            borderWidth: 1,
            padding: 16,
            margin: 20,
          }}
        >
          Anand is the best!
        </Text>
        <TouchableWithoutFeedback onPress={() => alert('hello')}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'green',
            }}
          >
            <Text style={{ color: 'white' }}>Click Me</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
