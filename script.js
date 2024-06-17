function deleteProduct(id){
 fetch('https://fakestoreapi.com/carts/+id',{
            method:"DELETE"
        })
            .then(res=>console.log(res)
            )            
    }
 
 fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
    document.querySelector('.all_products').innerHTML += `
    <div class ="all_products_item" data-id="${data[i].id}">
        <img src="${data[i].image}">
        <h2>Name:${data[i].title}</h2>
        <h2>Price:${data[i].price}</h2>
        <button>Добавить в корзину</button>
        <button class="deleteBtn" style= "border-color:red;margin-top:10px;color:red;">Удалить</button>
    </div>
    `
    }

    const deleteBtns = document.querySelectorAll(".deleteBtn")

    for (let i = 0; i < deleteBtns.length; i++) {
        const id = document[i].parentElement.getAttribute("data-id") 

        deleteBtns[i].addEventListener("click",() =>{
        deleteBtns[i].parentElementElement.remove(  )
        deleteProduct(id)
        })
        

        }
       console.log(deleteBtns);
})



function sort(target){
fetch('https://fakestoreapi.com/products?sort='+target.value)
.then(res=>res.json())
.then(data=> {
    document.querySelector('.all_products').innerHTML =''
    for (let i = 0; i < data.length; i++) {
        document.querySelector('.all_products').innerHTML += `
        <div class ="all_products_item" data-id="${data[i].id}">
            <img src="${data[i].image}">
            <h2>Name:${data[i].title}</h2>
            <h2>Price:${data[i].price}</h2>
            <button>Добавить в корзину</button>
            <button class="deleteBtn" style= "border-color:red;margin-top:10px;color:red;">Удалить</button>
        </div>
        `
        }
})
}
document.querySelector('select').addEventListener('change', (event)=>{
sort(event.target)
})



function limit() {
    const limitValue = parseInt(document.getElementById('limitInput').value);
    if (isNaN(limitValue) || limitValue <= 0) {
        return;
    }

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const limitedData = data.slice(0, limitValue);
            const productContainer = document.querySelector('.all_products');
            productContainer.innerHTML = '';
            limitedData.forEach(product => {
                productContainer.innerHTML += `
                    <div class="all_products_item" data-id="${product.id}">
                        <img src="${product.image}">
                        <h2>Name: ${product.title}</h2>
                        <h2>Price: ${product.price}</h2>
                        <button>Добавить в корзину</button>
                        <button class="deleteBtn" style="border-color:red; margin-top:10px; color:red;">Удалить</button>
                    </div>
                `;
            });
        });
}

document.getElementById('limitInput').addEventListener('input', limit);
