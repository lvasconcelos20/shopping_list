import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface IconProps {
  type: string;
  label: string;
  done: boolean;
}

const getIconAndColor = (type: string) => {
  switch (type) {
    case 'padaria':
      return {
        icon: <Icon name="bread-slice" size={16} color="#FACC15" />,
        backgroundColor: 'rgba(33, 30, 18, 1)',
        color: '#FACC15',
      };
    case 'legume':
      return {
        icon: <Icon name="carrot" size={16} color="#4CAF50" />,
        backgroundColor: 'rgba(28, 32, 21, 1)',
        color: '#4CAF50',
      };
    case 'fruta':
      return {
        icon: <Icon name="apple" size={16} color="#EF4444" />,
        backgroundColor: 'rgba(38, 26, 23, 1)',
        color: '#EF4444',
      };
    case 'bebida':
      return {
        icon: <Icon name="cup-water" size={16} color="#3B82F6" />,
        backgroundColor: 'rgba(26, 29, 35, 1)',
        color: '#3B82F6',
      };
    case 'carne':
      return {
        icon: <Icon name="food-steak" size={16} color="#EC4899" />,
        backgroundColor: 'rgba(37, 22, 34, 1)',
        color: '#EC4899',
      };
    default:
      return {
        icon: null,
        backgroundColor: 'rgba(33, 30, 18, 1)',
        color: '#FFFFFF',
      };
  }
};

const Tag: React.FC<IconProps> = ({ label, type, done }) => {
  const { icon, backgroundColor, color } = getIconAndColor(type);

  return (
    <View style={[styles.tag, { backgroundColor }, done ? styles.done : {}]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.tagText, { color }]}>{label}</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  done: {
    opacity: 0.5,
  },
  tagText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default Tag;
