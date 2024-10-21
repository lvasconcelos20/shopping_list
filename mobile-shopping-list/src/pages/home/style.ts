import styled from 'styled-components/native';


interface ItemContainerProps {
  done: boolean;
}


export const Container = styled.View`
  display: flex;
  background-color: #0c0c0d;
  align-items: center;

`;

export const Header = styled.View`
  display: flex;
  width: 428px;
  height: 182px;
  align-items: start;
  justify-content: center;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  width: 428px;
  height: 182px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  left: 24px;
`;

export const Form = styled.View`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: -30px;
  align-items: center;
  justify-content: space-around;

`;

export const StyledInput = styled.TextInput`
  height: 40px;
  background-color: rgba(17, 17, 18, 1);
  border: 1px solid rgba(37, 37, 41, 1);
  color: #ddd;
`;

export const Select = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  background-color: rgba(23, 23, 26, 1);
  border: 1px solid rgba(37, 37, 41, 1);
  border-radius: 6px 6px 6px 6px;
  align-items: center;
  justify-content: center;
`;

export const SelectText = styled.Text`
  color: #ddd;
`;
export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-left: 12px;
  background-color: rgba(116, 80, 172, 1);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const ItemContainer = styled.View<ItemContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ done }) => (done ? '#333' : '#171717')};
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;