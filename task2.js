const productCategory = []

productCategory.push(
    { 'id': 1, category: 'Eletronicos', status: true, products: [{ 'id': 1, name: 'PS5', price: '1' }, { 'id': 2, name: 'RTX 2080', price: '500.00' }, { 'id': 3, name: 'RTX 3090', price: '500.00' }] },
    { 'id': 2, category: 'Limpeza', status: false, products: [{ 'id': 1, name: 'Desinfetante', price: '10' }, { 'id': 2, name: 'Clorofina', price: '5.00' }] },
    { 'id': 3, category: 'Alimentos', status: true, products: [{ 'id': 1, name: 'Macarrão', price: '2' }] },
    { 'id': 4, category: 'Lazer', status: false, products: [{ 'id': 1, name: 'Baralho', price: '3' }, { 'id': 2, name: 'Ping Pong', price: '30.00' }] },
    { 'id': 5, category: 'Higiene', status: true, products: [{ 'id': 1, name: 'Sabonete', price: '3' }] }
);




// Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos". - Feito

const productName = productCategory.filter(nome => {
    return nome.category === 'Eletronicos';
}).map(allProducts => {
    return allProducts.products.map(productSubName => {
        return productSubName.name;
    });
});


// Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10. - Feito

const categoryNameShow = productCategory.map(nameCategory => {
    return nameCategory.products.map(allProductsPrice => {
        return allProductsPrice.price;
    }).filter(priceLess => {
        return priceLess < 10;
    }).map(nameList => {
        return nameCategory.category;
    })

})

// Percorrer a lista e mostrar no console só os produtos das categorias desativadas.

const categoryDisabled = productCategory.filter(allCategories => {
    return allCategories.status === false;
}).map(allProducts => {
    return allProducts.products.map(productSubName => {
        return productSubName.name;
    });
});


// Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.


productCategory.forEach(categories => {
    categories.quantidade = 5;
})




console.log(productName)
console.log(categoryNameShow)
console.log(categoryDisabled)
console.log(productCategory)

