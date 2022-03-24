import React from 'react';
import style from './Botao.module.scss';

interface props {
  type?: "button" | "submit" | "reset" | undefined, 
  onClick?: () => void,
  children: React.ReactNode
}

function Botao({onClick, type, children}: props) {
  return (
    <button 
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  )
}

export default Botao;