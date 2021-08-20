// ram 
const ram8gb = document.getElementById('ram-8gb');
const ram16gb = document.getElementById('ram-16gb');
const ramPrice = document.getElementById('ram-price')

// storage
const storage256gb = document.getElementById('storage-256gb');
const storage512gb = document.getElementById('storage-512gb');
const storage1tb = document.getElementById('storage-1tb');
const storagePrice = document.getElementById('storage-price')

// delivery
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const deliveryCost = document.getElementById('delivery-cost');

// coupon
const couponCode = document.getElementById('coupon-code');
const couponButton = document.getElementById('coupon-button');

// price 
const bestPrice = document.getElementById('best-Price');
const total = document.getElementById('total-price');
const bottomTotal = document.getElementById('bottom-total');

// return is class present
function isContain (elem) {
    return elem.classList.contains('selected');
}

// ram
ram8gb.addEventListener('click', function () {
    if(!isContain(ram8gb)) {
        ram8gb.classList.add('selected')
        ram16gb.classList.remove('selected');
    }
    ramPrice.innerText = '0';
    updateTotal()
});
ram16gb.addEventListener('click', function () {
    if(!isContain(ram16gb)) {
        ram8gb.classList.remove('selected');
        ram16gb.classList.add('selected');
    }
    ramPrice.innerText = '180';
    updateTotal()
});

// storage
storage256gb.addEventListener('click', function () {
    if(!isContain(storage256gb)) {
        storage256gb.classList.add('selected');
        storage512gb.classList.remove('selected');
        storage1tb.classList.remove('selected');
    }
    storagePrice.innerText = '0';
    updateTotal()
});
storage512gb.addEventListener('click', function () {
    if(!isContain(storage512gb)) {
        storage256gb.classList.remove('selected');
        storage512gb.classList.add('selected');
        storage1tb.classList.remove('selected');
    }
    storagePrice.innerText = '100';
    updateTotal()
});
storage1tb.addEventListener('click', function () {
    if(!isContain(storage1tb)) {
        storage256gb.classList.remove('selected');
        storage512gb.classList.remove('selected');
        storage1tb.classList.add('selected');
    }
    storagePrice.innerText = '180';
    updateTotal()
});

// delivery
freeDelivery.addEventListener('click', function () {
    if(!isContain(freeDelivery)) {
        freeDelivery.classList.add('selected');
        paidDelivery.classList.remove('selected');
    }
    deliveryCost.innerText = '0';
    updateTotal()
});
paidDelivery.addEventListener('click', function () {
    if(!isContain(paidDelivery)) {
        paidDelivery.classList.add('selected');
        freeDelivery.classList.remove('selected');
    }
    deliveryCost.innerText = '20';
    updateTotal()
});

// price
function updateTotal() {
    const bestCost = Number(bestPrice.innerText);
    const ramCost = Number(ramPrice.innerText);
    const storageCost = Number(storagePrice.innerText);
    const deliveryPrice = Number(deliveryCost.innerText );
    const grandTotal = ramCost + storageCost + deliveryPrice + bestCost;
    total.innerText = grandTotal;
    bottomTotal.innerText = grandTotal;
}

// coupon
couponButton.addEventListener('click', function () {
    code = couponCode.value;
    couponCode.value = '';
    if (code == 'stevekaku') {
        
        grandTotal = (total.innerText - (total.innerText * .20));
        
        total.innerText = grandTotal;
        bottomTotal.innerText = grandTotal;
    } else {
        return;
    }
})
