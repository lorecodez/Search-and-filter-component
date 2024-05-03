import React, { useState } from 'react';


type Item = {
    id: string;
    name: string;
    createdAt: Date;
    price: number;
    color: string;
    category: string[]
}

type Props = {
    data: Item[]
}

export default function List({ data }: Props) {

    const [filterList, setFilteredList] = useState([]);

    const [id, setId] = useState(undefined);
    const [firstDate, setFirstDate] = useState(undefined);
    const [lastDate, setLastDate] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [firstPrice, setFirstPrice] = useState(undefined);
    const [lastPrice, setLastPrice] = useState(undefined);
    const [color, setColor] = useState(undefined);
    
    
  return (
    <div>
      
    </div>
  )
}
