import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.inputStyles} placeholder='Your goals' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.listWrapper}>
        <Text>List of all Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputStyles: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  listWrapper: {
    flex: 4,
  },
});
