import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const textInputHandler = (enteredText) => {
    console.log(enteredText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyles}
          placeholder='Your goals'
          onTextInput={textInputHandler}
        />
        <Button title='Add Goal' />
      </View>
      <View style={styles.listWrapper}>
        <Text>List of all Goals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  inputWrapper: {
    flex: 1,
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

export default App;
