import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputHandler = (event) => {
    setEnteredGoalText(event);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ];
    });
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
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItemStyles}>
                <Text style={styles.listText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          bounceVertical={true}
        />
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
    margin: 6,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  listText: {
    color: 'white',
  },
});

export default App;
