import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    //const [count, setCount] = useState(0)

    
    const { data:images, loading } = useFetchGifs( category );
    //console.log(state)
    
    
    /* 

        useEffect( ()=> {
        getGifs( category ).then (imgs => setImages( imgs ));
        }, [ category ]) */


    
    

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3> 
            
            { loading && <p className='animate__animated animate__flash'> Loading </p> }
            
             <div className='card-grid animate__animated animate__fadeIn'>
                
                    {
                        images.map ( img => (
                            <GifGridItem 
                            key = { img.id }
                            {...img}
                            //img = { img } 
                            />
                        ))
                    }
                
            </div> 
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}