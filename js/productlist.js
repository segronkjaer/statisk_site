fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
    .then(showProducts)

function showProducts(products){
    // looper og kalder showProduct
    products.forEach(showProducts)
}

function showProduct(product){
    console.log(product);
    // fange template
    const template = document.querySelector("smallProductTemplate").content;
    // lav kopi
    const copy = template.cloneNode(true);
    // ændre indholdet
    copy.querySelector("h2").textContent = product.productdisplayname;
    if(product.soldout){
        // produktet er udsolgt //
        copy.querySelector("article").classList.add("produkt_udsolgt");
    }
    // appende
    document.querySelector("main").appendChild(copy);
}



/* min struktur: 
<article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp">
            <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
            <p class="brand">Nike</p>
            <p class="price">DKK 895,-</p>
            <p class="link"><a href="produkt.html">LÆS MERE</a></p>
        </article> 
*/