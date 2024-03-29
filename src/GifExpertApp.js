// FC
// usar rfcp
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    // setCategories( [...categories, 'Shingeki No Kyojin'] );
    //     setCategories( cats => [...cats, 'Shingeki No Kyojin'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;