import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder='Your goals' />
        <Button title='Add your Goals' />
      </View>
      <View style={styles.listWrapper}>
        <Text>List of all Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingTop: 100,
    flex: 1,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listWrapper: {
    paddingTop: 50,
  },
});
