const IDcategorySelected = localStorage.getItem('catID');

async function fetchProductsOfCategory(IDcat){
    const URL = PRODUCTS_URL + IDcat + '.json';
    try{
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error ('Error al realizar fetch');
        }
        productsOfCategory = await response.json();
        productsOfCategoryString = JSON.stringify(productsOfCategory.products);
        let products = localStorage.setItem('products', productsOfCategoryString);
        showProducts(productsOfCategory.products); 
    } catch(error){
        console.error('Error: ', error);
    }
}


const products = JSON.parse(localStorage.getItem('products'));

function showProducts(products){
    const productsContainer = document.getElementById('productsContainer');
    products.forEach(product => {
        //contenedor de cada producto
        let productContainer = document.createElement('div');
        productContainer.classList.add('row','mt-4','d-flex','align-items-center', 'rounded','bg-white');

        //contenedores: imagen, infoProducto, costo, infoVendidos
        let imageProductContainer = document.createElement('div'); 
        imageProductContainer.classList.add('col-12','col-md-5','m-0','p-0'); //contenedor img

        let infoProductContainer = document.createElement('div');
        infoProductContainer.classList.add('col-12', 'col-md-7');

        productsContainer.appendChild(productContainer);

        //imagen
        let productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.classList.add('w-100');
        imageProductContainer.appendChild(productImg);
       
        //costo producto
        let costProduct = document.createElement('p');
        costProduct.classList.add('fw-bold');
        costProduct.textContent = product.currency + '$ ' + product.cost;

        //nombre producto
        let productName = document.createElement('p');
        productName.textContent = product.name;
        productName.classList.add('fw-bold','h1');

        //descripción
        let productDescr = document.createElement('p');
        productDescr.textContent = product.description;

        //articulos vendidos
        let productSoldcount = document.createElement('p');
        productSoldcount.textContent = product.soldCount + ' artículos vendidos.';
        productSoldcount.classList.add('small')

        //nombre y descripcion agregado a contenedor info y contenedor producto
        productContainer.appendChild(imageProductContainer); 
        infoProductContainer.appendChild(productName);
        infoProductContainer.appendChild(costProduct);
        infoProductContainer.appendChild(productSoldcount);
        infoProductContainer.appendChild(productDescr);
        productContainer.appendChild(infoProductContainer); 

       
    });
}

document.addEventListener('DOMContentLoaded', function (e) {
    fetchProductsOfCategory(IDcategorySelected);
})