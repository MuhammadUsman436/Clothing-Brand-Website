window.addEventListener('load', () =>{

    var cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach(element => {
        document.getElementById('cartBody').innerHTML += `<tr>
    <td class="product__cart__item">
        <div class="product__cart__item__pic">
            <img src="${element.imgUrl}" alt="">
        </div>
        <div class="product__cart__item__text">
            <h6>${element.name}</h6>
            <h5>$${element.price}</h5>
        </div>
    </td>
    <td class="quantity__item">
        <div class="quantity">
            <div class="pro-qty-2">
                <input type="text" value="1">
            </div>
        </div>
    </td>
    <td class="cart__price">$ 30.00</td>
    <td class="cart__close"><i class="fa fa-close"></i></td>
</tr>`;
    });    
    
})