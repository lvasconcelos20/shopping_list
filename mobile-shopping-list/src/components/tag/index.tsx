import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sandwich, Carrot, Milk, Apple, Beef } from 'lucide-react';

interface TagProps {
  label: string;
  type: string;
  done: boolean;
}

const Tag: React.FC<TagProps> = ({ label, type, done }) => {
  const getIconAndColor = () => {
    switch (type) {
      case 'padaria':
        return {
          icon: <Sandwich size={16} color="#FACC15" />,
          backgroundColor: 'rgba(33, 30, 18, 1)',
          color: '#FACC15',
        };
      case 'legume':
        return {
          icon: <Carrot size={16} color="#4CAF50" />,
          backgroundColor: 'rgba(28, 32, 21, 1)',
          color: '#4CAF50',
        };
      case 'fruta':
        return {
          icon: <Apple size={16} color="#EF4444" />,
          backgroundColor: 'rgba(38, 26, 23, 1)',
          color: '#EF4444',
        };
      case 'bebida':
        return {
          icon: <Milk size={16} color="#3B82F6" />,
          backgroundColor: 'rgba(26, 29, 35, 1)',
          color: '#3B82F6',
        };
      case 'carne':
        return {
          icon: <Beef size={16} color="#EC4899" />,
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

  const { icon, backgroundColor, color } = getIconAndColor();

  return (
    <View style={[styles.tag, { backgroundColor }, done ? styles.done : styles.notDone]}>
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
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  done: {
    backgroundColor: '#A881E6',
  },
  notDone: {
    backgroundColor: '#171717',
  },
  tagText: {
    fontSize: 12,
  },
});

export default Tag;
