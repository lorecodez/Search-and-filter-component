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

    const [filterList, setFilteredList] = useState<Item[]>([]);

    const [id, setId] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<Date[] | undefined>(undefined);
    const [name, setName] = useState<string | undefined>(undefined);
    const [price, setPrice] = useState<number[] | undefined>(undefined);
    const [color, setColor] = useState<string | undefined>(undefined);
    const [category, setCategory] = useState<string[] | undefined>(undefined)
    
  return (
    <div>
        <details>
            <summary>
                <h2>Filter</h2>
            </summary>
            <form>
                <input
                title='Name'
                value={name}
                type="text"
                placeholder='Item Name'
                onChange={(e) => setName(e.target.value)}
                />
                <input
                title='Id'
                value={id}
                type="number"
                placeholder='Item Id'
                onChange={(e) => setId(e.target.value)} 
                />
                <input
                title='Minimum Date'
                />
            </form>
        </details>
        <section>

        </section>
    </div>
  )
}
