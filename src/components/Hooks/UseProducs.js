import React, { useEffect, useState } from 'react';

const useProducs = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("./products.JSON")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   
    return  [products, setProducts];
};

export default useProducs;