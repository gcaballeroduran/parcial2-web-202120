const data = require('../assets/data');

function  getProducts(query) {

  const respuesta = data.filter((producto) => 
  {
    if(producto.name?.toLowerCase().includes(query?.toLowerCase()))
    {
      return producto;
    }
   
  });
  return respuesta;
}

module.exports = { getProducts };
