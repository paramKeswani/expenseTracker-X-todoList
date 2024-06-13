import {React,useState,useEffect} from 'react';
import './textComp.css';
import { stateAtom,isVisibleAtom } from './atom' ;
import { useRecoilState } from 'recoil';

const TextComponent = ({ text }) => {

  const [isVisible, setIsVisible] = useRecoilState(isVisibleAtom); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true); 
    }, 1000);

    return () => {
      clearTimeout(timeout); 
    };
  }, []); 

  if (!isVisible) {
    return null;
  }

  return (
    <div className="text-card">
      <div className="card-body">
        <p className="text-center mb-0">{text}</p>
      </div>
    </div>
  );
}

export default TextComponent;
