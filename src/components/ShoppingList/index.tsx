import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { styles } from './styles';
import { Product, ProductProps } from '../Product';

// import { shoppingListExample } from '../../utils/shopping.list.data';

export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('products')
      //
      // .where('quantity','==',1)
      //
      // .limit(3) // limita a quantidade de retorno
      //
      // .orderBy('quantity', 'asc') // por ordem asc ou desc
      // .startAt (2) // não lista quiantidade menor que 2
      // .endAt(3) // não lista com quantidade maior que 3
      // .startAfter(3) // se usado a lista inicia a partir do 4
      // .endBefore(5) // se usado, lista abaixo de 5
      //
      // Para buscar apenas uma vez
      // .get()
      // .then(response => {
      // const data = response.docs.map(doc => {
      // return {
      // id: doc.id,
      // ...doc.data(),
      // };
      //
      //
      .orderBy('description', 'asc')
      // Para ficar observando as alterações:
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setProducts(data);
      });
    // Limpa ao desmontar o componente
    return () => subscribe();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
