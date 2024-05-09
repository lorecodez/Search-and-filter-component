'use client'
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
                onChange={(e) => setColor(e.target.value)}
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
                    onClick={() => {
                        if( categories.includes('fruit') ){
                            setCategories(categories.filter(item => item != 'fruit'))
                        } else {
                            setCategories([...categories, 'fruit'])
                        }
                    }}
                    />
                    <label htmlFor='fruit'>fruit</label>
                    <input
                    id='sale'
                    title='Sale'
                    name='sale'
                    value={'sale'}
                    type='radio'
                    checked={ categories.includes('sale') }
                    onClick={() => {
                        if( categories.includes('sale') ){
                            setCategories(categories.filter(item => item != 'sale'))
                        } else {
                            setCategories([...categories, 'sale'])
                        }
                    }}
                    />
                    <label htmlFor='sale'>sale</label>
                    <input 
                    type="radio" 
                    name="citrus" 
                    id="citrus"
                    title='Citrus'
                    value={'citrus'} 
                    checked={ categories.includes('citrus')}
                    onClick={() => {
                        if( categories.includes('citrus') ){
                            setCategories(categories.filter(item => item != 'citrus'))
                        } else {
                            setCategories([...categories, 'citrus'])
                        }
                    }}
                    />
                    <label htmlFor="citrus">Citrus</label>
                    <input 
                    type="radio" 
                    name="organic" 
                    id="organic"
                    title='Organic'
                    value={'organic'}
                    checked={ categories.includes('organic')}
                    onClick={() => {
                        if( categories.includes('organic') ){
                            setCategories(categories.filter(item => item != 'organic'))
                        } else {
                            setCategories([...categories, 'organic'])
                        }
                    }}
                    />
                    <label htmlFor="organic">Organic</label>
                    <input 
                    type="radio"
                    name='tropical'
                    id='tropical'
                    title='Tropical'
                    value={'tropical'}
                    checked={ categories.includes('tropical')}
                    onClick={() => {
                        if( categories.includes('tropical') ){
                            setCategories(categories.filter(item => item != 'tropical'))
                        } else {
                            setCategories([...categories, 'tropical'])
                        }
                    }}
                    />
                    <label htmlFor="tropical">Tropical</label>
                    <input 
                    type="radio" 
                    name="vegtable" 
                    id="vegtable"
                    title='Vegtable'
                    value={'vegtable'}
                    checked={ categories.includes('vegtable') }
                    onClick={() => {
                        if( categories.includes('vegtable') ){
                            setCategories(categories.filter(item => item != 'vegtable'))
                        } else {
                            setCategories([...categories, 'vegtable'])
                        }
                    }}
                    />
                   </div>
                </div>
            </form>
        </details>
        <section>
                <p>{name}</p>
                <p>{id}</p>
                <p>{minDate?.toLocaleDateString()}</p>
                <p>{maxDate?.toLocaleDateString()}</p>
                <p>{minPrice}</p>
                <p>{maxPrice}</p>
                <p>{color}</p>
                <p>
                    {categories.map((category) => category)}
                </p>
        </section>
    </div>
  )
}
