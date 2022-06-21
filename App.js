import { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const inputRef = useRef(null);

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
    setCourseGoals((currentGoals) => {
      currentGoals.splice(index, 1);
      return [...currentGoals];
    });
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((currentGoal) => {
        return currentGoal.key !== id;
      });
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Button
        title='Add New Goal'
        onPress={() => setModalVisible(true)}
        color='#5e0acc'
      />

      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.modalWrapper}>
          <View style={styles.inputWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.imageStyles}
                source={require('./assets/images/goal.png')}
              />
            </View>
            <TextInput
              style={styles.inputStyles}
              placeholder='Your goals'
              onChangeText={textInputHandler}
              value={enteredGoalText}
              placeholderTextColor='#120438'
              ref={inputRef}
              onLayout={() => inputRef.current.focus()}
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
    backgroundColor: '#5e0acc',
  },
  imageWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageStyles: {
    height: 80,
    width: 80,
  },
  inputWrapper: {
    height: 300,
    width: '90%',
    justifyContent: 'space-between',
    margin: 8,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    color: '#120438',
  },
  listWrapper: {
    flex: 4,
  },
  listHeader: {
    paddingLeft: 2,
    margin: 16,
    marginHorizontal: 0,
    color: '#fff',
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
