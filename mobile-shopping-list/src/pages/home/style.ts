import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0c0c0d;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const StyledInput = styled.TextInput`
  width: 150px;
  height: 40px;
  background-color: rgba(17, 17, 18, 1);
  border: 1px solid rgba(37, 37, 41, 1);
  color: #ddd;
  padding: 5px;
  border-radius: 6px;
`;

export const Select = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: rgba(23, 23, 26, 1);
  border: 1px solid rgba(37, 37, 41, 1);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const SelectText = styled.Text`
  color: #ddd;
`;

export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: rgba(116, 80, 172, 1);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ done }) => (done ? '#333' : '#171717')};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
