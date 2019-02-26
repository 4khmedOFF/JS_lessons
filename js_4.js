            // 1
var num = +prompt("Введите трехзначное число");
    function convert(numstr) {
        var obj = {};
        numstr = numstr + "";
        for (var i = 0; i < 3; i++) {
            if (numstr.length >= 4) {
                console.log("Не трехзначное число");
                break;
            }
            else if (i === 0) {
                obj.hundreds = numstr[i];
            }
            else if (i === 1) {
                obj.dozens = numstr[i];
            }
            else {
                obj.units = numstr[i];
            }
        }
        return obj;
    }
    console.log(convert(num));


            // 2
    var cart = {
        product1: {
            title: "boots",
            size: "37",
            quantity: "3",
            price: "40"
        },
        product2: {
            title: "boots",
            size: "45",
            quantity: "5",
            price: "450"
        },
        product3: {
            title: "boots",
            size: "45",
            quantity: "4",
            price: "350"
        },
        product4: {
            title: "boots",
            size: "45",
            quantity: "2",
            price: "150"
        }
    };
    function sumPrice(cartPrice) {
        var cartSum = 0;
        for (var cartProduct in cartPrice) {
            cartSum = cartSum + cartPrice[cartProduct].price * cartPrice[cartProduct].quantity;
        }
        return cartSum;
    }
    console.log(sumPrice(cart));