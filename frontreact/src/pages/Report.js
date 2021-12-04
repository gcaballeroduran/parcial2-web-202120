import React, { useState, useEffect } from 'react';
import {getProductsService} from '../services/product'
import '../styles/pages/_report.scss'
import * as d3 from "d3"
import Chart from '../components/Chart'

export const Report = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getInf();
  }, [" "]);
  const getInf = async() =>{
    const inf = await getProductsService(" ");
    setProducts(inf);
  }

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <Chart
        data = {products}
        />
        <div id='canvas'>
      </div>
      </div>
    </section>
  );
};
