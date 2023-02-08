var productgridcatalog=[
    {
        name: "Men's Shirt",
        price: "75",
        imgUrl: "images/p1.png"
    },
    {
        name: "Men's Shirt",
        price: "80",
        imgUrl: "images/p2.png"
    },
    {
        name: "Women's Dress",
        price: "68",
        imgUrl: "images/p3.png"
    },
    {
        name: "Women's Dress",
        price: "70",
        imgUrl: "images/p4.png"
    },
    {
        name: "Women's Dress",
        price: "75",
        imgUrl: "images/p5.png"
    },
    {
        name: " Women's Dress",
        price: "58",
        imgUrl: "images/p6.png"
    },
    {
        name: "Women's Dress",
        price: "80",
        imgUrl: "images/p7.png"
    },
    {
        name: " Men's Shirt",
        price: "65",
        imgUrl: "images/p8.png"
    },
    {
        name: "Men's Shirt",
        price: "65",
        imgUrl: "images/p9.png"
    },
    {
        name: "Men's Shirt",
        price: "65",
        imgUrl: "images/p10.png"
    },
    {
        name: " Men's Shirt",
        price: "65",
        imgUrl: "images/p11.png"
    },
    {
        name: "Women's Dress",
        price: "65",
        imgUrl: "images/p12.png"
    }
]
var AddtoCart = (id)=>{
    
    


     
    
   var item;
  // console.log(url);
   //iterate over the productcatalog and match the url
    for(var i =0 ; i< productgridcatalog.length; i++){
        if(productgridcatalog[i].imgUrl == id){
            //add to cart
            var cart = localStorage.getItem('cart');
            alert(cart);
            if(cart == null){
                
                var cart = [];
                item = productgridcatalog[i];
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
                    item = productgridcatalog[i];
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
    
    
    document.getElementById('lblCartCount').innerHTML = JSON.parse(localStorage.getItem('itemcount'));

    //get the prodcutcatalog item from localstorage and merge it with productgridcatalog and set it again
    var temp = JSON.parse(localStorage.getItem('productCatalog'))
    
    temp = [...temp,...productgridcatalog];
    console.log(temp);
    //now remove duplicates from temp on the basis of url
    var temp2 = [];
    for(var i =0 ; i< temp.length; i++){
        var flag = false;
        for(var j =0 ; j< temp2.length; j++){
            if(temp[i].imgUrl == temp2[j].imgUrl){
                flag = true;
                break;
            }
        }
        if(flag == false){
            temp2.push(temp[i]);
        }
    }
    temp = temp2;

    localStorage.setItem('fullproductcatalog',JSON.stringify(temp));
   
  //  console.log(temp);
    
    document.getElementById('products').innerHTML += productgridcatalog.map((product) => {
        return ` <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box">
           <div class="option_container">
              <div class="options">
                 <a href="" class="option1" onclick="AddtoCart('${product.imgUrl}')">
                 Add To Cart
                 </a>
                 <a href="" class="option2">
                 Buy Now
                 </a>
              </div>
           </div>
           <div class="img-box">
              <img src="${product.imgUrl}" alt="">
           </div>
           <div class="detail-box">
              <h5>
                 ${product.name}
              </h5>
              <h6>
                 $${product.price}
              </h6>
           </div>
        </div>
     </div>`;


})
})

