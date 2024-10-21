import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import Checkbox from 'expo-checkbox';
import Tag from '../../components/tag';
import {
  Container,
  Header,
  BackgroundImage,
  Title,
  Form,
  StyledInput,
  SelectText,
  AddButton,
  ItemContainer,
} from './style';
import { useList } from '../../hooks/useList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Home() {
  const { tasks, addTask, removeTask, toggleTaskDone } = useList();
  const [name, setName] = useState('');
  const [quantidade, setQuantidade] = useState('1');
  const [unidade_medida, setUnidade] = useState('Un');
  const [categoria, setCategoria] = useState('');
  const [unidadeModalVisible, setUnidadeModalVisible] = useState(false);
  const [categoriaModalVisible, setCategoriaModalVisible] = useState(false);

  const handleCreateList = () => {
    if (name && categoria && unidade_medida) {
      addTask({
        name,
        quantidade: parseInt(quantidade), 
        categoria,
        unidade_medida,
        done: false,
      });
      setName('');
      setQuantidade('1');
      setCategoria('');
      setUnidade('Un');
    }
  };

  const getUnidadeLabel = (unidade_medida: string) => {
    switch (unidade_medida) {
      case 'Un':
        return 'unidade(s)';
      case 'L':
        return 'litro(s)';
      case 'kg':
        return 'Kg';
      default:
        return 'Kg';
    }
  };

  return (
    <Container>
      <Header>
        <BackgroundImage source={require('../../assets/background.png')} />
        <Title >Lista de Compras</Title>
      </Header>
      <Form>
        <View style={{ flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{ color: 'rgba(175, 171, 182, 1)', marginBottom: 4 }}>Item</Text>
              <StyledInput
                placeholder="Item"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#555"
                style={{ width: 380, height: 40, marginBottom: 10, borderRadius: 6 }}
              />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style={{ color: 'rgba(175, 171, 182, 1)', marginBottom: 4 }}>Quantidade</Text>
            <StyledInput
              placeholder="Quantidade"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
              placeholderTextColor="#555"
              style={{
                width: 66,
                height: 40,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
              }}
            />
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <TouchableOpacity
              onPress={() => setUnidadeModalVisible(true)}
              style={{
                width: 72,
                marginTop: 24,
                height: 40,
                right: 6,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(23, 23, 26, 1)',
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
              }}
            >
              <SelectText>{unidade_medida}</SelectText>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 80, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => setCategoriaModalVisible(true)}
              style={{
                width: 100,
                height: 40,
                backgroundColor: 'rgba(23, 23, 26, 1)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,

              }}
            >
              <SelectText>{categoria || 'Categoria'}</SelectText>
            </TouchableOpacity>
            <AddButton onPress={handleCreateList} >
              <Text style={{ color: '#fff', fontSize: 20}}>+</Text>
            </AddButton>
          </View>
        </View>
      </Form>

      <Modal
        transparent={true}
        visible={unidadeModalVisible}
        animationType="slide"
        onRequestClose={() => setUnidadeModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#17171A', padding: 20, borderRadius: 10 }}>
            {['Un', 'Kg', 'L'].map((unidade) => (
              <TouchableOpacity
                key={unidade}
                onPress={() => {
                  setUnidade(unidade);
                  setUnidadeModalVisible(false);
                }}
                style={{ padding: 10, alignItems: 'center' }}
              >
                <Text style={{ color: '#fff' }}>{unidade}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={categoriaModalVisible}
        animationType="slide"
        onRequestClose={() => setCategoriaModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#17171A', padding: 20, borderRadius: 10 }}>
            {['Padaria', 'Legume', 'Carne', 'Fruta', 'Bebida'].map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => {
                  setCategoria(cat);
                  setCategoriaModalVisible(false);
                }}
                style={{ padding: 10, alignItems: 'center' }}
              >
                <Text style={{ color: '#fff' }}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer done={item.done} style={{  paddingVertical: 8, paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                value={item.done}
                onValueChange={() => toggleTaskDone(item.id)}
                color="#A881E6"
              />
              <Text style={{ color: '#fff', marginLeft: 10 }}>
                {item.name} - {item.quantidade} {getUnidadeLabel(item.unidade_medida)}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Tag label={item.categoria} type={item.categoria.toLowerCase()} done={item.done} />
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Icon name="trash-can" size={20} color="rgba(168, 129, 230, 1)" />
              </TouchableOpacity>
            </View>
          </ItemContainer>
        )}
      />
    </Container>
  );
}
