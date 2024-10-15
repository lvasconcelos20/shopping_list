import React from 'react'
import Image from 'next/image'
import { Background } from '../assets'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <header className="relative w-full h-screen font-inter" style={{ backgroundColor: '#0C0C0D' }}>
      {/* Imagem de fundo */}
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

      {/* Formulário centralizado */}
      <div className="absolute left-[360px] top-[180px] flex justify-center mt-[-18px]">
        <form className="flex gap-20"> 
          <div className="relative w-[290px]">
            <Input 
              id="item-input" 
              type="text" 
              className="w-full h-[40px] border rounded-md placeholder-transparent  text-gray-400"
              style={{border: '1px solid rgba(37, 37, 41, 1)', backgroundColor: 'rgba(17, 17, 18, 1)'}}
            />
            <Label 
              htmlFor="item-input" 
              className="absolute left-2 top-[-20px] text-sm text-gray-400"
            >
              Item
            </Label>
          </div>

          {/* Quantidade */}
          <div className="relative w-[150px]">
            <Select>
              <SelectTrigger id="quantidade-select" className="peer w-full h-[40px] text-gray-400" style={{border: '1px solid rgba(37, 37, 41, 1)', background: 'rgba(23, 23, 26, 1)'}}>
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

          {/* Categoria */}
          <div className="relative w-[150px]">
            <Select>
              <SelectTrigger id="categoria-select" className="peer w-full h-[40px] text-gray-400" style={{border: '1px solid rgba(37, 37, 41, 1)', background: 'rgba(23, 23, 26, 1)'}}>
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

          {/* Botão de adicionar */}
          <Button className="text-white rounded-full w-[40px] h-[40px] flex items-center justify-center" style={{background: 'rgba(116, 80, 172, 1)', fontSize: '35px'}}>
            +
          </Button>
        </form>
      </div>
    </header>
  )
}
