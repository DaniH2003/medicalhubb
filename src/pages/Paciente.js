import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import longo from "@/image/logo.jpg"

import React from 'react';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div>
            
        <Image
          src={longo}
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
            <div className="flex flex-col place-items-center justify-center">
               <h1>Formulario</h1>
               <p>Formulario para Paciente😁👻</p>

               <form>
                <lable>Nombre</lable>
                <input type="text"/>
                <lable>Apellidos</lable>
                <input type="text"/>
                <lable>Curp</lable>
                <input type="text"/>
                <lable>Edad</lable>
                <input type="text"/>
               </form>
                            <br/>
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
                                onClick={() => {
                                    location.href="/registro"
                                }}
                            >
                                Registrar😁👻
                            </button>
                        </div>

    </div>
  )
}
