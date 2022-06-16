import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputHandler = (event) => {
    setEnteredGoalText(event);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) return;
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ];
    });
    setEnteredGoalText('');
    setModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    console.log('pressed', id);
    // setCourseGoals((currentGoals) => {
    //   currentGoals.splice(index, 1);
    //   return [...currentGoals];
    // });
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((currentGoal) => {
        return currentGoal.key !== id;
      });
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title='Add New Goal'
        onPress={() => setModalVisible(true)}
        color='#5e0acc'
      />
      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.modalWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputStyles}
              placeholder='Your goals'
              onChangeText={textInputHandler}
              value={enteredGoalText}
            />
            <Button onPress={addGoalHandler} title='Add Goal' />
            <Button
              onPress={() => setModalVisible(false)}
              title='Close Modal'
              color='red'
            />
          </View>
        </View>
      </Modal>
      <View style={styles.listWrapper}>
        <Text style={styles.listHeader}>List of all Goals</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <Pressable
                android_ripple={{ color: '#ddddd', borderless: true }}
                onPress={() => deleteGoalHandler(itemData.item.key)}
              >
                <View style={styles.listItemStyles}>
                  <Text style={styles.listText}>{itemData.item.text}</Text>
                </View>
              </Pressable>
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  inputWrapper: {
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 8,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  listWrapper: {
    flex: 4,
  },
  listHeader: {
    paddingLeft: 2,
    margin: 16,
    marginHorizontal: 0,
  },
  listItemStyles: {
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  listText: {
    color: 'white',
  },
});

export default App;
