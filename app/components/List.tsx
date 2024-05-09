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
    const [maxDate, setMaxDate] = useState<Date | undefined>(undefined);
    const [name, setName] = useState<string | undefined>(undefined);
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [color, setColor] = useState<string | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([])
    
  return (
    <div>
        <details>
            <summary>
                <h2>Filter</h2>
            </summary>
            <form>
                <input
                title='Name'
                name='name'
                value={name}
                type="text"
                placeholder='Item Name'
                onChange={(e) => setName(e.target.value)}
                />
                <input
                title='Id'
                name='id'
                value={id}
                type="number"
                placeholder='Item Id'
                onChange={(e) => setId(e.target.value)} 
                />
                <input
                title='Minimum Date'
                name='minDate'
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
                name='maxDate'
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
                name='minPrice'
                value={minPrice}
                type='number'
                onChange={(e) => setMinPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <input
                title='Maximun Price'
                name='maxPrice'
                value={maxPrice}
                type='number'
                onChange={(e) => setMaxPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <input
                title='Color'
                name='color'
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
                    <h3>Categories</h3>
                   <div>
                   <input
                    id='fruit'
                    title='Fruit'
                    name='fruit'
                    value={'fruit'}
                    type='radio'
                    checked={ categories.includes('fruit') }
                    onChange={()=> setCategories([...categories, 'fruit'])}
                    />
                    <label htmlFor='fruit'>fruit</label>
                    <input
                    id='sale'
                    title='Sale'
                    name='sale'
                    value={'sale'}
                    type='radio'
                    checked={ categories.includes('sale') }
                    onChange={() => setCategories([...categories, 'sale'])}
                    />
                    <label htmlFor='sale'>sale</label>
                    <input 
                    type="radio" 
                    name="citrus" 
                    id="citrus"
                    value={'citrus'} 
                    checked={ categories.includes('cirtus')}
                    onChange={() => setCategories([...categories, 'citrus'])}
                    />
                    <label htmlFor="citrus">Citrus</label>
                    <input 
                    type="raido" 
                    name="organic" 
                    id="organic"
                    value={'organic'}
                    checked={ categories.includes('organic')}
                    onChange={() => setCategories([...categories, 'organic'])} 
                    />
                   </div>
                </div>
            </form>
        </details>
        <section>

        </section>
    </div>
  )
}
