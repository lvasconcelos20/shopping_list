"use client"


import React, { useState } from 'react';
import { useList } from '../hook/useList';
import Image from 'next/image';
import { Tag } from '@/components/tag';
import { Background } from '../assets';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
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
  const { tasks, addTask, removeTask, loading, error } = useList();
  const [name, setName] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [categoria, setCategoria] = useState('');

  const handleCreateList = () => {
    if (name && categoria) {
      addTask({ name, quantidade, categoria, done: false });
      setName(''); 
      setQuantidade(1);
      setCategoria('');
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
          <h2 className="absolute left-[360px] top-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            Lista de Compras
          </h2>
        </div>
      </header>
      <div className="absolute left-[360px] top-[180px] mt-[-20px] w-full max-w-[600px]">
        {/* Formulário */}
        <form className="flex gap-12 items-end">
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
          <div className="relative w-[100px]">
            <Input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className="w-full h-[40px] border rounded-md text-gray-400"
              style={{ border: '1px solid rgba(37, 37, 41, 1)', backgroundColor: 'rgba(23, 23, 26, 1)' }}
            />
          </div>
          <div className="relative w-[150px]">
          <Select
              value={categoria} 
              onValueChange={setCategoria}  
            >
              <SelectTrigger id="categoria-select" className="peer w-full h-[40px] text-gray-400" style={{ border: '1px solid rgba(37, 37, 41, 1)', background: 'rgba(23, 23, 26, 1)' }}>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <Label
                htmlFor="categoria-select"
                className="absolute left-2 top-[-20px] text-sm text-gray-400"
              >
                Categoria
              </Label>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="padaria">Padaria</SelectItem>
                  <SelectItem value="legume">Legume</SelectItem>
                  <SelectItem value="fruta">Fruta</SelectItem>
                  <SelectItem value="bebida">Bebida</SelectItem>
                  <SelectItem value="carne">Carne</SelectItem>
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
              className="flex items-center justify-between bg-[#171717] h-[60px] rounded-lg p-4"
            >
              <div className="flex items-center">
                <Checkbox checked={task.done} style={{ color: 'rgba(168, 129, 230, 1)' }} />
                <span>
                  <h3 className="text-white font-bold">{task.name}</h3>
                  <p className="text-xs text-gray-400">{task.quantidade}</p>
                </span>
              </div>
              <div className="flex justify-center items-center">
                <Tag label={task.categoria} type={task.categoria} />
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
