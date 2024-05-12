'use client'
import React, { useState } from 'react';

//types for data
type Item = {
    id: number;
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

    //creating filtered data array
    const [filteredData, setFilterData] = useState<Item[]>(data)

    //creating states for filter params
    const [id, setId] = useState<number | undefined>();
    const [minDate, setMinDate] = useState<Date | undefined>();
    const [maxDate, setMaxDate] = useState<Date | undefined>();
    const [name, setName] = useState<string | undefined>();
    const [minPrice, setMinPrice] = useState<number | undefined>();
    const [maxPrice, setMaxPrice] = useState<number | undefined>();
    const [color, setColor] = useState<string | undefined>();
    const [categories, setCategories] = useState<string[]>([])

    //applies filters to data 
    const handleSearch = () => {

        console.log('handleSearch');

        //reset date before applying filters
        setFilterData(data);

        //checking to see if a filter is selected and if so running the data through it 
        if(id){
            setFilterData((prev) => prev.filter((item) => item.id == id))
            console.log('set id')
        } else if(name){
            setFilterData((prev) => prev.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())))
            console.log('set name')
        } else if(minDate){
            setFilterData((prev) => prev.filter((item) => item.createdAt >= minDate))
            console.log('set date')
        } else if(maxDate){
            setFilterData((prev) => prev.filter((item) => item.createdAt <= maxDate))
        } else if(minPrice){
            setFilterData((prev) => prev.filter((item) => item.price >= minPrice))
            console.log('set price')
        } else if(maxPrice){
            setFilterData((prev) => prev.filter((item) => item.price <= maxPrice))
        } else if(color){
            setFilterData((prev) => prev.filter((item) => item.color == color))
            console.log('set color')
        } else if(categories.length > 0){
            setFilterData((prev) => prev.filter((item) => item.category.some(cat => categories.includes(cat))))
            console.log('set categories')
        }

        console.log('filtering...')

        // setFilterData(data.filter((item) => {
            
        //     for(var key in filterList){
        //         if(item[key as keyof Item] === undefined || item[key as keyof Item] != filterList[key as keyof {}]){
        //             return false;
        //         }

        //         console.log(item)
                
        //         return true;
        //     }
        // }));

    };
    
  return (
    <div>
        <details>
            <summary>
                <h2 className='font-bold'>Filter Options</h2>
            </summary>
            <form className='flex flex-col'>
                <label htmlFor="name">Item Name</label>
                <input
                id='name'
                title='Name'
                name='name'
                value={name}
                type="text"
                placeholder='Place enter a name'
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="id">Item Id</label>
                <input
                id='id'
                title='Id'
                name='id'
                value={id}
                type="number"
                placeholder='Please enter an ID'
                onChange={(e) => setId(e.target.valueAsNumber)} 
                />
                <label htmlFor="minDate">Min Date</label>
                <input
                id='minDate'
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
                <label htmlFor="maxDate">Max Date</label>
                <input
                id='maxDate'
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
                <label htmlFor="minPrice">Min Price</label>
                <input
                id='minPrice'
                title='Minimun Price'
                name='minPrice'
                value={minPrice}
                type='number'
                onChange={(e) => setMinPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <label htmlFor="maxPrice">Max Price</label>
                <input
                id='maxPrice'
                title='Maximun Price'
                name='maxPrice'
                value={maxPrice}
                type='number'
                onChange={(e) => setMaxPrice(e.target.valueAsNumber)}
                placeholder='please enter a number'
                />
                <label htmlFor='color'>Color</label>
                <input
                id='Color'
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
                        <label className='mr-1' htmlFor='fruit'>fruit</label>
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
                        <label className='mr-1' htmlFor='sale'>sale</label>
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
                        <label className='mr-1' htmlFor="citrus">Citrus</label>
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
                        <label className='mr-1' htmlFor="organic">Organic</label>
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
                        <label className='mr-1' htmlFor="tropical">Tropical</label>
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
                        <label className='mr-1' htmlFor="vegtable">Vegtable</label>
                   </div>
                </div>
                <button
                title='Search'
                name='search'
                type='button'
                onClick={handleSearch}
                className='rounded-2xl p-2 border border-black'
                >
                    Search
                </button>
            </form>
        </details>
        <section>
                <h3 className='font-bold'>Selected Filters</h3>
                <p>Name: {name}</p>
                <p>Id: {id}</p>
                <p>Min Date: {minDate?.toLocaleDateString()}</p>
                <p>Max Date: {maxDate?.toLocaleDateString()}</p>
                <p>Min price: {minPrice}</p>
                <p>Max Price: {maxPrice}</p>
                <p>Color: {color}</p>
                <p>Categories:</p>
                <ul className='flex flex-wrap gap-2'>
                    {categories.map((category, index) => <li key={index} >{category}</li>)}
                </ul>
        </section>
        <section>
            <h3 className='font-bold'>Data</h3>
            <ul>
                {filteredData.map((item, index) =>
                    <li key={index}>{JSON.stringify(item)}</li>
                )}
            </ul>
        </section>
    </div>
  )
}
