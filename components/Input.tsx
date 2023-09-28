import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
  placeholder
}) => {
  return (
    <main className='flex flex-col'>
      <label 
        className="text-lg text-white"
        htmlFor={id}
      >{label}
      </label>

      <input 
        onChange={onChange}
        type={type} 
        value={value}
        id={id}
        className="block rounded-md p-3 w-full text-md text-white bg-neutral-700 appearance-none"
        placeholder={placeholder}
      />
    </main>
  )
}

export default Input;