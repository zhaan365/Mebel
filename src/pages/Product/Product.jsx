import React, {useEffect, useState} from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {useParams} from 'react-router-dom'
import api from "../../config/api/api";
import HitSale from "../../components/HitSale/HitSale";

const Product = () => {

    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    }, [])

    if ('id' in product){
        return (
            <>
                <section className="product">
                    <div className="container">
                        <div className="product__row">
                            <ProductSlider/>
                            <ProductInfo product={product}/>
                        </div>
                    </div>
                </section>
                <HitSale/>
            </>
        );
    } else {
        return <h2>Loading...</h2>
    }


};

export default Product;