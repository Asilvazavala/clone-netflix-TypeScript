"use client"

import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '@/components/Input';
import Image from 'next/image';

export default function Auth () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const register = useCallback(async () => {
    try {
      await axios.post('/api', {
        email,
        name,
        password
      })
    } catch(error) {
      console.log(error);
    }
  }, [email, name, password])

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center">
      <section className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image 
            src="/images/logo.png"
            alt='logo'
            width={100}
            height={100}
          />
        </nav>

        <article className='flex justify-center'>
          <aside className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Iniciar sesión' : 'Crear una cuenta'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (  
                <Input 
                  id="name"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  label="Usuario"
                  type="name"
                  placeholder="juan"
                />
              )}
              <Input 
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                label="Correo"
                type="email"
                placeholder="juan@correo.com"
              />
              <Input 
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                label="Contraseña"
                type="password"
                placeholder="(Minímo 8 carácteres)"
              />
            </div>
            <button onClick={register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
            </button>
            <p className='text-neutral-500 mt-8'>
              {variant === 'login' ? '¿Primera vez usando Netflix?' : '¿Ya tienes una cuenta?'}
            </p>
            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
            {variant === 'login' ? 'Crear nueva cuenta' : 'Iniciar sesión'}
            </span>
          </aside>
        </article>
      </section>
    </main>
  )
}