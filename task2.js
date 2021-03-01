
// Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo))
const productCategory = []

// adicionar 5 categorias.
productCategory.push(
    { 'id': 1, category: 'Eletronicos', status: true },
    { 'id': 2, category: 'Limpeza', status: false },
    { 'id': 3, category: 'Alimentos', status: true },
    { 'id': 4, category: 'Lazer', status: false, },
    { 'id': 5, category: 'Higiene', status: true, }
);


//     Criar uma lista vazia de "produtos" (com id, nome e preço) 
const products = []

//e adicionar 3 produtos - Feito
products.push(
    { 'id': 1, name: 'PS5', price: '1.00', category: 'Eletronicos' },
    { 'id': 2, name: 'RTX 2080', price: '500.00', category: 'Eletronicos' },
    { 'id': 3, name: 'RTX 3090', price: '500.00', category: 'Eletronicos' },
    { 'id': 4, name: 'Desinfetante', price: '10.00', category: 'Limpeza' },
    { 'id': 5, name: 'Clorofina', price: '5.00', category: 'Limpeza' },
    { 'id': 6, name: 'Macarrão', price: '2.00', category: 'Alimentos' },
    { 'id': 7, name: 'Baralho', price: '3.00', category: 'Lazer' },
    { 'id': 8, name: 'Ping Pong', price: '30.00', category: 'Lazer' },
    { 'id': 9, name: 'Sabonete', price: '3.00', category: 'Higiene' }
)



//     Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".

const categoryName = productCategory.slice(0, 1).map(nameCat => {
    const productName = products.filter(productsCat => {
        return productsCat.category === 'Eletronicos';
    })

    const compareProdCat = productName.filter(prodCat => {
        return prodCat.category === nameCat.category;
    }).map(nameCompare => {
        return nameCompare.name;
    })

    // return console.table(compareProdCat);

})


// Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.

const categoryNameShow = productCategory.map(nameCategory => {

    const compareProdCat = products.filter(prodCat => {
        return prodCat.category === nameCategory.category;
    }).filter(nameCompare => {
        return nameCompare.price < 10;
    })

    // return console.log(compareProdCat);

})

//     Percorrer a lista e mostrar no console só os produtos das categorias desativadas.

const categoryDisabled = products.map(allCategories => {
    const verifyStatus = productCategory.filter(prodStatus => {
        return prodStatus.status === false;
    }).filter(compareProdCat => {
        return compareProdCat.category === allCategories.category;
    }).map(() => {
        return allCategories.name;
    })

    // return console.log(verifyStatus);
})


// Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.


const addQuantity = productCategory.map(category => {


    const productCompare = products.filter(productsCatName => {
        return productsCatName.category === category.category;
    })

    return {
        id: category.id,
        category: category.category,
        status: category.status,
        productsName: productCompare
    }

});

const quantityNumber = addQuantity.map(category => ({
    id: category.id,
    category: category.category,
    quantityProducts: category.productsName.length,
}));


console.table(quantityNumber)

