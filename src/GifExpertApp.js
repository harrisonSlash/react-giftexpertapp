//Con el snippet rafc se crea más rápido

import React, { useState }from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Dragon Ball'] );

    return (
        <>
          <h2>Gif Expert App</h2>
          <AddCategory setCategories={ setCategories } />
          <hr />

          <ol>
              {
                categories
                .map(category => {
                  return <GifGrid
                                key={ category }
                                category={ category } />
                  }
                )
              }
          </ol>
        </>
    )
}
