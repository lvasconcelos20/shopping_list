"use client";

import React, { useState } from 'react';
import { useList } from '../hook/useList';
import Image from 'next/image';
import { Tag } from '@/components/tag';
import { Background } from '../assets';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Sandwich, Carrot,  Milk, Apple,  Beef } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const { tasks, addTask, removeTask, toggleTaskDone, loading, error } = useList();
  const [name, setName] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [unidade_medida, setUnidade] = useState('Un '); // Adicionei este estado para armazenar a unidade
  const [categoria, setCategoria] = useState('');

  const handleCreateList = () => {
    if (name && categoria && unidade_medida) {
      addTask({ name, quantidade, categoria, unidade_medida, done: false });
      setName('');
      setQuantidade(1);
      setCategoria('');
      setUnidade('Un'); // Reseta a unidade
    }
  };

  // Função para retornar a unidade correta
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
    <div className="bg-[#0C0C0D] font-inter flex justify-center items-center">
      <header className="relative w-full h-screen font-inter">
        <div className="relative w-full h-[185px]">
          <Image
            src={Background}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <h2 className="absolute left-[340px] top-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            Lista de Compras
          </h2>
        </div>
      </header>
      <div className="absolute left-[340px] top-[180px] mt-[-20px]  max-w-[740px]">
        {/* Formulário */}
        <form className="flex justify-center gap-15 ">
          <div className="relative w-[326px]">
            <Input
              id="item-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[40px] border rounded-md text-gray-400"
              style={{ border: '1px solid rgba(37, 37, 41, 1)', backgroundColor: 'rgba(17, 17, 18, 1)' }}
            />
            <Label
              htmlFor="item-input"
              className="absolute left-2 top-[-20px] text-sm text-gray-400"
            >
              Item
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-[80px]">
              <Input
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-full h-[40px] border rounded-md text-gray-400"
                style={{ border: '1px solid rgba(37, 37, 41, 1)', backgroundColor: 'rgba(17, 17, 18, 1)' }}
              />
              <Label
                htmlFor="item-input"
                className="absolute left-2 top-[-20px] text-sm text-gray-400"
              >
                Quantidade
              </Label>
            </div>
            <div className="relative w-[80px]">
              <Select
                value={unidade_medida}
                onValueChange={setUnidade} 
                // Atualiza a unidade ao selecionar
              >
                <SelectTrigger
                  id="unidade-select"
                  className="peer  h-[40px] text-gray-400 border rounded-md "
                  style={{
                    border: '1px solid rgba(37, 37, 41, 1)', backgroundColor: 'rgba(23, 23, 26, 1)',
                  }}
                >
                  <SelectValue placeholder="UN." />
                </SelectTrigger>
                <SelectContent className="bg-[#17171A] w-full text-gray-400" style={{ minWidth: '80px', marginTop: '2px'}} >
                  <SelectGroup className=" bg-[#17171A] w-full  text-gray-400 ">
                    <SelectItem value="Un">Un.</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="Kg">Kg</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative w-[160px]">
            <Select value={categoria} onValueChange={setCategoria}>
              <SelectTrigger
                id="categoria-select"
                className=" h-[40px] text-gray-400 border rounded-md focus:border-purple-500"
                style={{ border: '1px solid rgba(37, 37, 41, 1)', background: 'rgba(23, 23, 26, 1)'  }}
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <Label
                htmlFor="categoria-select"
                className="absolute left-2 top-[-20px] text-sm text-gray-400"
              >
                Categoria
              </Label>
              <SelectContent className=" bg-[#17171A] flex  text-gray-400 mt-1">
                <SelectGroup>
                  <SelectItem value="padaria" className=" flex justify-center hover:bg-[#292929]">
                    <Sandwich className="text-yellow-500" size={16} /> 
                    <span>Padaria</span>
                  </SelectItem>
                  <SelectItem value="legume" className="flex justify-center items-center gap-2 px-4 py-4">
                    <Carrot className="text-green-500" size={16} /> 
                    <span>Legume</span>
                  </SelectItem>
                  <SelectItem value="carne" className="flex  justify-center items-center gap-2 px-4 py-4">
                    <Beef className="text-red-500" size={16} /> 
                    <span>Carne</span>
                  </SelectItem>
                  <SelectItem value="fruta" className="flex  justify-center items-center  px-4 py-4">
                    <Apple className="text-red-600" size={16} /> 
                    <span>Fruta</span>
                  </SelectItem>
                  <SelectItem value="bebida" className="flex justify-center items-center gap-2 px-4 py-4">
                    <Milk className="text-blue-500" size={16} /> 
                    <span>Bebida</span>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleCreateList}
            disabled={loading}
            className="text-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
            style={{ background: 'rgba(116, 80, 172, 1)', fontSize: '35px' }}
          >
            {loading ? '...' : '+'}
          </Button>
        </form>

        {/* Lista de Itens */}
        <ul className="mt-[40px] flex flex-col gap-11">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between h-[60px] rounded-lg p-4 ${
                task.done ? 'bg-gray-500' : 'bg-[#171717]'
              }`}
            >
              <div className="flex items-center">
                <Checkbox
                  checked={task.done}
                  onChange={() => toggleTaskDone(task.id)}
                  style={{ color: 'rgba(168, 129, 230, 1)' }}
                />
                <span>
                  <h3
                    className={`text-white font-bold ${task.done ? 'line-through' : ''}`}
                  >
                    {task.name}
                  </h3>
                  <p className={`text-xs text-gray-400 ${task.done ? 'line-through' : ''}`}>
                    {task.quantidade} {getUnidadeLabel(task.unidade_medida)}
                  </p>
                </span>
              </div>
              <div className="flex justify-center items-center ">
                <Tag label={task.categoria} type={task.categoria} done={task.done} />
                <button onClick={() => removeTask(task.id)}>
                  <MoreVertIcon style={{ color: 'rgba(168, 129, 230, 1)' }} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
