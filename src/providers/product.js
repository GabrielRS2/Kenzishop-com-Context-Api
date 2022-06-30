
import { createContext, useState } from 'react';

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
	const [products, setProduct] = useState([  
    {name:"Capa Anti Shock Anime", models:["Motorola", "Samsung"], id:"1", price:14.90, link:"https://http2.mlstatic.com/D_NQ_NP_946115-MLB49292064595_032022-V.webp"},
    {name:"Capa Mai Sakurajima", models:["Iphone", "Xiaomi"], id:"2", price:10.00, link:"https://http2.mlstatic.com/D_NQ_NP_971223-MLB45356919462_032021-V.webp"},
    {name:"Capa One Piece", models:["Iphone", "Samsung"], id:"3", price:27.90, link:"https://http2.mlstatic.com/D_NQ_NP_605650-MLB48714119685_122021-V.webp"},
    {name:"Capa Itachi", models:["Motorola", "Samsung"], id:"4", price:28.90, link:"https://http2.mlstatic.com/D_NQ_NP_786006-MLB46519645551_062021-V.webp"},
    {name:"Capa Demon Slayer", models:["Motorola", "Xiomi"], id:"5", price:20.90, link:"https://http2.mlstatic.com/D_NQ_NP_736499-MLB48717544032_122021-V.webp"},
    {name:"Capa Ochaco Uraraka", models:["Iphone", "Xiomi", "Motorola"], id:"6", price:30.90, link:"https://http2.mlstatic.com/D_NQ_NP_709769-MLB45754196186_042021-V.webp"},
    {name:"Capa Tripulação One Piece", models:["Iphone", "Xiomi", "Motorola"], id:"7", price:35.90, link:"https://http2.mlstatic.com/D_NQ_NP_733922-MLB45115548384_032021-V.webp"},
    {name:"Capa Kyojuro Rengoku", models:["Iphone", "Xiomi"], id:"8", price:23.99, link:"https://http2.mlstatic.com/D_NQ_NP_602721-MLB50296964521_062022-V.webp"}
  ]);

  return (
    <ProductContext.Provider
    value={{ products, setProduct }}>
    {children}
    </ProductContext.Provider>
  );
}
