    const productCategory = [];


    productCategory.push(
        { id: 1, name: 'Eletronicos' },
        { id: 2, name: 'Alimentos' },
        { id: 3, name: 'Roupas' },
        { id: 4, name: 'Limpeza' },
        { id: 5, name: 'Lazer' }
    );

    const categoryName = productCategory.map(function (category) {
        return category.name;
    });

    const onlyOneCategoryName = productCategory.filter(function (category) {
        return category.name === "Eletronicos";
    });



    console.log(categoryName);
    console.log(onlyOneCategoryName);

