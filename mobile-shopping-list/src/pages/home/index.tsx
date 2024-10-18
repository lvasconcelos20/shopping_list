import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';
import {
  Container,
  Header,
  BackgroundImage,
  Title,
  Form,
  StyledInput,
  Select,
  SelectText,
  AddButton,
  ItemContainer
} from './style'; // Ajuste o caminho conforme necessário

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [quantidade, setQuantidade] = useState('1');
  const [unidade_medida, setUnidade] = useState('Un');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleCreateList = () => {
    if (name && categoria && unidade_medida) {
      addTask({ name, quantidade, categoria, unidade_medida, done: false });
      setName('');
      setQuantidade('1');
      setCategoria('');
      setUnidade('Un');
    }
  };

  const toggleTaskDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Header>
        <BackgroundImage source={require('../assets/background.png')} />
        <Title>Lista de Compras</Title>
      </Header>
      <Form>
        <StyledInput
          placeholder="Item"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#555"
        />
        <StyledInput
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          placeholderTextColor="#555"
        />
        <Select onPress={() => setUnidade(unidade_medida === 'Un' ? 'Kg' : 'Un')}>
          <SelectText>{unidade_medida}</SelectText>
        </Select>
        <Select onPress={() => setCategoria('Categoria')}>
          <SelectText>{categoria || 'Categoria'}</SelectText>
        </Select>
        <AddButton onPress={handleCreateList}>
          <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
        </AddButton>
      </Form>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer done={item.done}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                value={item.done}
                onValueChange={() => toggleTaskDone(item.id)}
                color="#A881E6"
              />
              <Text style={{ color: '#fff', marginLeft: 10 }}>
                {item.name} - {item.quantidade} {item.unidade_medida}
              </Text>
            </View>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={{ color: 'rgba(168, 129, 230, 1)' }}>Delete</Text>
            </TouchableOpacity>
          </ItemContainer>
        )}
      />
    </Container>
  );
}
