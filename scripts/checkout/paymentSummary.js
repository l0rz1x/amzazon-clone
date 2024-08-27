import { cart,deleteFromCart,updateDeliveryOption } from "../../data/cart.js";
import { products,getProduct } from "../../data/products.js";
import  calmoney  from "../utils/money.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;
cart.forEach((cartItem) => {
const product = getProduct(cartItem.productId);
productPriceCents += product.priceCents * cartItem.quantity;

const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
shippingPriceCents += deliveryOption.priceCents;
});

const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
const taxCents = totalBeforeTaxCents * 0.1;
const orderTotalCents = totalBeforeTaxCents + taxCents;


let paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${calmoney(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${calmoney(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${calmoney(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${calmoney(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${calmoney(orderTotalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
          `;
          document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
         
}