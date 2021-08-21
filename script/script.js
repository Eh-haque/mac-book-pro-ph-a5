// ram by id
const ram8gb = document.getElementById('ram-8gb');
const ram16gb = document.getElementById('ram-16gb');
const ramPrice = document.getElementById('ram-price');

// storage by id
const storage256gb = document.getElementById('storage-256gb');
const storage512gb = document.getElementById('storage-512gb');
const storage1tb = document.getElementById('storage-1tb');
const storagePrice = document.getElementById('storage-price')

// delivery by id
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const deliveryCost = document.getElementById('delivery-cost');

// coupon by id
const couponCode = document.getElementById('coupon-code');

// price by id
const bestPrice = document.getElementById('best-Price');
const total = document.getElementById('total-price');
const bottomTotal = document.getElementById('bottom-total');

// ram price update
ram8gb.addEventListener('click', function () {
    ramPrice.innerText = '0';
    updateTotal()
});
ram16gb.addEventListener('click', function () {
    ramPrice.innerText = '180';
    updateTotal()
});

// storage price update
storage256gb.addEventListener('click', function () {
    storagePrice.innerText = '0';
    updateTotal()
});
storage512gb.addEventListener('click', function () {
    storagePrice.innerText = '100';
    updateTotal()
});
storage1tb.addEventListener('click', function () {
    storagePrice.innerText = '180';
    updateTotal()
});

// delivery price update
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal()
});
paidDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal()
});

// coupon code function
function addCoupon() {
    updateTotal()
    code = couponCode.value;
    couponCode.value = '';
    if (code == 'stevekaku') {
        afterTotal = (total.innerText - (total.innerText * .20));
        total.innerText = afterTotal;
        bottomTotal.innerText = afterTotal;
    } else {
        alert('False Coupon');
        return;
    }
};

// total price function
function updateTotal() {
    const bestCost = Number(bestPrice.innerText);
    const ramCost = Number(ramPrice.innerText);
    const storageCost = Number(storagePrice.innerText);
    const deliveryPrice = Number(deliveryCost.innerText );
    const grandTotal = ramCost + storageCost + deliveryPrice + bestCost;
    total.innerText = grandTotal;
    bottomTotal.innerText = grandTotal;
}
