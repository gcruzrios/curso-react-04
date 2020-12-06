import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = ()=>{
        
        //setCategories([...categories, 'HunterXHunter']);

        setCategories( categories =>[...categories,'HunterXHunter']);
        //categories.push('HunterXHunter')
        console.log(categories);
    } */

    //console.log(categories);
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={ setCategories }/>
          <hr />

                {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                categories.map(category =>  (
                    <GifGrid 
                        key={ category }
                        category = { category}/>
                    ))
                }
            </ol>

          
        </>
    )
}
