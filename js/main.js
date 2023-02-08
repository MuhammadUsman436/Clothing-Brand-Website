/*  ---------------------------------------------------
    Template Name: Male Fashion
    Description: Male Fashion - ecommerce teplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);


//our code
const CalcTotal = () =>{
    var total = 0;
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(element => {
        total += (element.price*element.quantity);
    });
    document.getElementById('subtotal').innerHTML = "$"+total;
    document.getElementById('total').innerHTML = "$"+(total+10);
}
var generateCoupon = () => {

    var couponText = ['usman','saleha','abdullah','sheraz'];//names that coupon will be generated from
    var coupon = [];//coupons will be stored here along with their discounts in the from of object (array of objects)
  
    for(let j = 0 ; j < Math.floor(Math.random() * 6) ; j++){//generating random number of coupons
      coupon[j] =  {
        text : couponText[Math.floor(Math.random() * (couponText.length))],
        discount : Math.random() * 0.25
      }//generating random discount and selecting a keyword from the couponText array
       
      for(let i = 0; i < (1 + Math.floor(Math.random() * 6)) ; i++){//for number of digits in coupon text
        coupon[j].text += Math.floor(Math.random() * 11);//insert random numbers in the coupon text
        }
        
    
    }

    localStorage.setItem('coupons',JSON.stringify(coupon));

}


const verifyCoupon =()=>{
    var userCoupon = document.getElementById('couponInput').value;//gets coupon entered by user
    var coupons = JSON.parse(localStorage.getItem('coupons'));//get valid coupons from storage
     
    for(let i = 0; i < coupons.length ; i++){//iterates over the valid coupons
      if(userCoupon == coupons[i].text){//checking if the user's coupon is valid or not
        //calculate total after discount
        var newtotal = (document.getElementById('total').innerHTML.replace('$','') - (document.getElementById('total').innerHTML.replace('$','')*coupons[i].discount)).toFixed(1);
        

        document.getElementById('total').innerHTML = "$"+newtotal;//calculating total after discount
        document.getElementById('couponInput').disabled = 'true';//disabling the input field
        alert('Coupon Applied');//alert
        return;
      }
    }
    alert('Invalid Coupon');   
}


var RemoveFromCart = (id) =>{
    var cart = JSON.parse(localStorage.getItem('cart'));
    var str = ['hamza','fjfn'];

  
    let x = cart.find(x => x.id == id);
    var newCart = [];
    for(var i = 0 ;i< cart.length; i++){
        if(cart[i].id !== id){
            newCart.push(cart[i]);
        }
    }
    console.log(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    location.reload();
}

var IncreaseQuantity = (id) =>{
    var cart = JSON.parse(localStorage.getItem('cart')); 
    cart.find(x =>{
        if(x.id == id){
            x.quantity++;
        }
    }
    );
    localStorage.setItem('cart',JSON.stringify(cart)); 
    location.reload();
}


var DecreaseQuantity = (id) => {
    console.log('iwas clicked');
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.find(x =>{
        if(x.id == id){
            if(x.quantity != 0){
                x.quantity--;
            }
            
        }
    }
    );
    localStorage.setItem('cart',JSON.stringify(cart)); 
    location.reload();
}



window.addEventListener('load', () =>{
    generateCoupon();
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(element => {
        document.getElementById('cartBody').innerHTML += `<tr>
    <td class="product__cart__item">
        <div class="product__cart__item__pic">
            <img src='${element.url}' alt=''/>
        </div>
        <div class="product__cart__item__text">
            <h6>${element.name}</h6>
        </div>
    </td>
    <td class="quantity__item">
        <div class="quantity">
            <div class="pro-qty-2">
            <button class="btn-danger rounded" onclick = "DecreaseQuantity('${element.id}')">-</button>
            <i>${element.quantity}</i>
            <button class="btn-primary rounded" onclick = "IncreaseQuantity('${element.id}')">+</button>
            </div>
        </div>
    </td>
    <td class="cart__price">$${element.price}</td>0
    <td class="cart__close" onclick="RemoveFromCart('${element.id}')"><i class="fa fa-close"></i></td>
</tr>`;
    });    

    //implement removal from cart in fa fa-close
    //implement increase decrase old one not working


    CalcTotal();
    
    
})