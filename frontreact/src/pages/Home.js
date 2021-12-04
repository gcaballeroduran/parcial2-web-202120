import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import '../styles/pages/_home.scss'
import {getProductsService} from '../services/product'
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getInf();
  }, [searchKey]);
  const getInf = async() =>{
    const inf = await getProductsService(searchKey);
    console.log("Pr",inf)
    setProducts(inf);
  }

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id = "gallery"/></h1>
        
        <div className='home-card'>
      
          {console.log("Products", products)}
          {products.map((e, i) => (
            <Card 
                key={i} 
                products={e}
                name = {e.name}
                picture = {e.picture}
                price = {e.price}
                isActive ={e.isActive}
                />
                
          ))}
        </div>
      </div>
    </section>
  );
};
