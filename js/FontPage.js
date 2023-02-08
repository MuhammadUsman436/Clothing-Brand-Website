var productCatalog = [
{
    name : "Mens's Shirt",
    price : 75,
    imgUrl : "images/p1.png"
},
{
    name : "Mens's Shirt",
    price : 65,
    imgUrl : "images/p10.png"
},
{
    name : "Mens's Shirt",
    price : 65,
    imgUrl : "images/p11.png"
},
{
    name : "Men's Shirt",
    price : 80,
    imgUrl : "images/p2.png"
},
{
    name : "Women's Dress",
    price : 68,
    imgUrl : "images/p3.png"
},
{
    name : "Women's Dress",
    price : 70,
    imgUrl : "images/p4.png"
},
{
    name : "Women's Dress",
    price : 75,
    imgUrl : "images/p5.png"
},
{
    name : "Women's Dress",
    price : 58,
    imgUrl : "images/p6.png"
},
{
    name : "Kurta Shalwar",
    price :80 ,
    imgUrl : "images/usaa.jpg"
},
{
    name : "Men's Kurta",
    price :55 ,
    imgUrl : "images/usi.png"
},
{
    name : "Kurta Shalwar",
    price : 60,
    imgUrl : "images/us.png"
},
{
    name : "Kurta Shalwar",
    price : 70,
    imgUrl : "images/usa.jpg"
}
]
//add property if to all objects of productcatalogue
for(var i =0 ; i< productCatalog.length; i++){
    productCatalog[i].id = productCatalog[i].imgUrl.substring(productCatalog[i].imgUrl.indexOf('/')+1, productCatalog[i].imgUrl.indexOf('.'));
}


var AddtoCart = (id)=>{
   var item;
  // console.log(url);
   //iterate over the productcatalog and match the url
    for(var i =0 ; i< productCatalog.length; i++){
        if(productCatalog[i].id == id){
            //add to cart
            var cart = localStorage.getItem('cart');
            console.log(cart);
            if(cart == null){
                
                var cart = [];
                item = productCatalog[i];
                item.quantity = 1;
                cart.push(item);
                
                localStorage.setItem('cart', JSON.stringify(cart));
            }else{
                //cart exists

                cart = JSON.parse(cart);
                //check if item already exits in cart
                var itemExists = false;
                for(var j =0 ; j< cart.length; j++){
                    if(cart[j].id == id){
                        //item exists
                        itemExists = true;
                        cart[j].quantity += 1;
                        break;
                    }
                }
                if(!itemExists){
                    item = productCatalog[i];
                    item.quantity = 1;
                    cart.push(item);
                }
             
                
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
    }
   

    localStorage.setItem('itemcount',JSON.parse(localStorage.getItem('cart')).length);

    document.getElementById('lblCartCount').innerHTML=JSON.parse(localStorage.getItem('cart')).length;
      
}

window.addEventListener('load',() =>{
    if(JSON.parse(localStorage.getItem('itemcount')) === null){
        localStorage.setItem('itemcount',0);
    }
    //clear the cart in localstorage
    localStorage.removeItem('cart');
    
    document.getElementById('lblCartCount').innerHTML = JSON.parse(localStorage.getItem('itemcount'));
    localStorage.setItem('productCatalog', JSON.stringify(productCatalog));
   //console.log(productCatalog[0].name+productCatalog[0].price.toString()+productCatalog[0].imgUrl);
    //console.log(productCatalog[0].imgUrl.substring(productCatalog[0].imgUrl.indexOf('/')+1, productCatalog[0].imgUrl.indexOf('.')));
    //console.log(productCatalog);
    for(var i =0 ; i< productCatalog.length; i++){
        document.getElementById('products').innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="box">
       <div class="option_container">
          <div class="options">
             <a href="#" class="option1" onclick="AddtoCart('${productCatalog[i].id}')">
             Add to Cart
             </a>
             <a href="" class="option2">
             Buy Now
             </a>
          </div>
       </div>
       <div class="img-box">
          <img src="${productCatalog[i].imgUrl}" alt="">
       </div>
       <div class="detail-box">
          <h5>
          ${productCatalog[i].name}
          </h5>
          <h6>
             $${productCatalog[i].price}
          </h6>
       </div>
    </div>
 </div>`
    }

})