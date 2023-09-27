import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <main className='flex flex-col'>
      <label 
        className="text-lg text-blue-500"
        htmlFor={id}
      >
      <input 
        onChange={onChange}
        type={type} 
        value={value}
        id={id}
        className="block rounded-md p-4 w-full text-md text-white bg-neutral-700 appearance-none"
        placeholder=" "
      />
        {label}
      </label>
    </main>
  )
}

export default Input;