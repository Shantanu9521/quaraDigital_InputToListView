import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default function App() {
  const [textInputValue, setTextInputValue] = useState('');
  const [listData, setListData] = useState([]);

  const handleAddItem = () => {
    if (textInputValue.trim()) {
      setListData([...listData, { key: Math.random().toString(), value: textInputValue }]);
      setTextInputValue('');
    }
  };

  const handleDeleteItem = (key) => {
    const filteredData = listData.filter((item) => item.key !== key);
    setListData(filteredData);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.value}</ListItem.Title>
      </ListItem.Content>
      <Button title="Delete" onPress={() => handleDeleteItem(item.key)} />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Enter item"
      />
      <Button title="Add" onPress={handleAddItem} />
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

