"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

import CartCard from './cart-card';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/store';
import { fetchAllProducts } from '../_helpers/get-data';
import { CartItem, ProductWithDetails, VariantProductWithImages } from '../interfaces/interfaces';

export default function CartSection() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { items: cartItemsFromStore, removeAll } = useCart();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart-storage');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                const cartItemsFromStorage = parsedCart.state.items;
                setCartItems(cartItemsFromStorage);
            } catch (error) {
                console.error('Error parsing cart data:', error);
            }
        }
    }, []);

    const productIds = cartItems.map(item => item.id);

    const { data: products, error } = useSWR(
        productIds.length > 0 ? productIds : null,
        fetchAllProducts
    );

    if (productIds.length > 0 && !products && !error) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div
                    className="inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
                    role="status"
                >
                    <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className='flex justify-center items-center mt-9'>Error loading products.</div>;
    }

    const productList: ProductWithDetails[] = products?.products || [];
    const advancedProductList: VariantProductWithImages[] = products?.advancedProducts || [];

    const totalPrice = [...productList, ...advancedProductList].reduce((total, product) => {
        const cartItem = cartItems.find(item => item.id === product.id);
        if (cartItem) {
            total += product.price * cartItem.quantity;
        }
        return total;
    }, 0);

    const onCheckout = async () => {
        try {
            const response = await axios.post(`/api/checkout`, {
                products: cartItems.map((item) => ({
                    id: item.id,
                    quantity: item.quantity,
                })),
            });
            window.location = response.data.url;
        } catch (error) {
            console.log(error);
        }
    };

    const handleCleanCart = () => {
        setCartItems([]);
        removeAll();
        localStorage.removeItem('cart-storage');
    };

    const isEmptyCart = productIds.length === 0 || (productList.length === 0 && advancedProductList.length === 0);

    return (
        <div className='px-4 sm:px-6 lg:px-8'>
            {isEmptyCart ? (
                <p className="text-2xl font-bold mb-4 text-center mt-7">Your cart is empty.</p>
            ) : (
                <>
                    <div className="px-4 py-6 bg-gray-100 mt-6 border-t border-gray-200">
                        <div className="flex mb-4">
                            <span className="font-semibold text-lg">Total:</span>
                            <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={onCheckout}>Checkout</Button>
                            <Button onClick={handleCleanCart} variant={'destructive'}>Clean Cart</Button>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-center mt-7">Your cart</h1>
                    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {[...productList, ...advancedProductList].map((product) => {
                            const cartItem = cartItems.find(item => item.id === product.id);
                            const quantity = cartItem ? cartItem.quantity : 0;

                            return (
                                <CartCard
                                    key={product.id}
                                    id={product.id}
                                    variantName={product.advancedProduct?.name}
                                    name={product.name}
                                    images={product.images}
                                    price={product.price}
                                    quantity={quantity}
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
