import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { Background } from '../assets'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
    return (
      <div className="flex justify-center w-full h-screen" style={{backgroundColor: '#0C0C0D'}} >
          <div className="items-start w-full h-full">
          <Image src= {Background} alt="Background"/>      
          </div>  
          <div className="absolute top-1 text-center">
            <h1 className="text-2xl font-bold text-white mt-60 mr-360">
              Lista de Compras
            </h1>
          <div className= "flex flex-col items-start" style={{marginTop: '1.75rem'}}>
            <Label htmlFor="item" className="text-xs" style= {{color: 'rgba(175, 171, 182, 1)'}}>Item</Label>
            <Input  className= "h-35 w-280 " type="item" id="item" placeholder="" style={{marginTop: '7px', background: 'rgba(17, 17, 18, 1)' }}/>


            </div>
            
          </div>
  
      </div>
    )
  
    
  } 
