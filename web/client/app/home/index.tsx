import React from 'react'
import Image from 'next/image'
import { Tag } from '@/components/tag'
import { Background } from '../assets'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Home() {
  const items = [
    { name: 'Maçã', quantity: '2 unidades', category: 'fruta', icon: '🍎', color: 'bg-red-500' },
    { name: 'Pão francês', quantity: '4 unidades', category: 'padaria', icon: '🥖', color: 'bg-yellow-500' },
  ];

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
            <Select>
              <SelectTrigger id="quantidade-select" className="peer w-full h-[40px] text-gray-400" style={{ border: '1px solid rgba(37, 37, 41, 1)', background: 'rgba(23, 23, 26, 1)' }}>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <Label 
                htmlFor="quantidade-select" 
                className="absolute left-2 top-[-20px] text-sm text-gray-400"
              >
                Quantidade
              </Label>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="relative w-[150px]">
            <Select>
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
                  <SelectItem value="alimento">Alimento</SelectItem>
                  <SelectItem value="limpeza">Limpeza</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="text-white rounded-full w-[40px] h-[40px] flex items-center justify-center" style={{ background: 'rgba(116, 80, 172, 1)', fontSize: '35px' }}>
            +
          </Button>
        </form>

        {/* Lista de Itens */}
        <ul className="mt-[40px] flex flex-col gap-15">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-[#171717] h-[60px] rounded-lg shadow p-4"
            >
              <div className="flex items-center gap-4">
                <Checkbox style={{ color: 'rgba(168, 129, 230, 1)' }} />
                <div>
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.quantity}</p>
              

                </div>
              </div>
              <span className={`text-lg ${item.color}  rounded-full`}>
                {item.icon}
              </span>
              <button>
                <MoreVertIcon style={{color: 'rgba(168, 129, 230, 1)'}} />
              </button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}



