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
    const [minDate, setMinDate] = useState<Date | undefined>(undefined);
    const [maxDate, setMaxDate] = useState<Date| undefined>(undefined);
    const [name, setName] = useState<string | undefined>(undefined);
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [color, setColor] = useState<string | undefined>(undefined);
    const [categories, setCategories] = useState<string[] | undefined>(undefined)
    
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
                value={minDate?.toDateString()}
                type='date'
                onChange={(e) => {
                    if(!e.target.valueAsDate){
                        alert('Error, please select a date.');
                        return
                    }

                    setMinDate(e.target.valueAsDate);
                }}
                />
                <input
                title='Maximum Date'
                value={maxDate?.toDateString()}
                type='date'
                onChange={(e) => {
                    if(!e.target.valueAsDate){
                        alert('Error, please select a date.');
                        return
                    }

                    setMaxDate(e.target.valueAsDate);
                }}
                />
                <input
                title='Minimun Price'
                value={minPrice}
                type='number'
                onChange={(e) => setMinPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <input
                title='Maximun Price'
                value={maxPrice}
                type='number'
                onChange={(e) => setMaxPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <input
                title='Color'
                value={color}
                list='colors'
                />
                <datalist id='colors'>
                    <option value="yellow"/>
                    <option value="red"/>
                    <option value="green"/>
                    <option value="orange"/>
                    <option value="brown"/>
                </datalist>
                <div>
                    <label>Categories</label>
                </div>
            </form>
        </details>
        <section>

        </section>
    </div>
  )
}
