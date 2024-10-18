import React from "react";
import { Sandwich, Carrot,  Milk, Apple,  Beef } from 'lucide-react';

interface TagProps {
  label: string;
  type: string; 
  done: boolean;
}

const Tag: React.FC<TagProps> = ({ label, type, done }) => {
  // Definindo o ícone e a cor com base no tipo
  const getIconAndColor = () => {
    switch (type) {
      case 'padaria':
        return {
          icon: <Sandwich className="w-[16px] h-[16px] text-yellow-400" />,
          backgroundColor: 'rgba(33, 30, 18, 1)',
          color: 'text-yellow-400'
        };
      case 'legume':
        return {
          icon: <Carrot className="w-[16px] h-[16px] text-green-500" />,
          backgroundColor: 'rgba(28, 32, 21, 1)',
          color: 'text-green-500'
        };
      case 'fruta':
          return {
            icon: <Apple  className="w-[16px] h-[16px] text-red-400" />,
            backgroundColor: 'rgba(38, 26, 23, 1)',
            color: 'text-red-400'
          };
          case 'bebida':
            return {
              icon: <Milk />,
              backgroundColor: 'rgba(26, 29, 35, 1)',
              color: 'text-blue-400'
            };
          case 'carne':
            return {
                icon: <Beef className="w-[16px] h-[16px] text-pink-400" />,
                backgroundColor: 'rgba(37, 22, 34, 1)',
                color: 'text-pink-400'
              };
      default:
        return {
          icon: null,
          backgroundColor: 'rgba(33, 30, 18, 1)',
          color: 'text-white'
        };
    }
  };

  const { icon, backgroundColor, color } = getIconAndColor();

  return (
    <div
      className={`flex justify-center items-center ${done ? 'opacity-50' : 'opacity-100'} `}
      style={{
        width: '100px',
        height: '32px',
        borderRadius: '999px',
        backgroundColor,
      }}
    >
      <span className={`text-lg ${color} w-[20px] h-[20px]`}>{icon}</span>
      <span className={`text-xs font-semibold ${color}`} style={{ marginLeft: '6px' }}>
        {label}
      </span>
    </div>
  );
};

export default Tag;
