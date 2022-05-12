import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputHandler = (event) => {
    setEnteredGoalText(event);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => {
      return [...currentGoals, enteredGoalText];
    });
    setEnteredGoalText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyles}
          placeholder='Your goals'
          onChangeText={textInputHandler}
        />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.listWrapper}>
        <Text>List of all Goals</Text>
        {courseGoals.map((courseGoal, index) => {
          return (
            <Text style={styles.listItemStyles} key={index}>
              {courseGoal}
            </Text>
          );
        })}
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
  listItemStyles: {
    padding: 10,
    backgroundColor: crimson,
    fontSize: 16,
  },
});

export default App;
