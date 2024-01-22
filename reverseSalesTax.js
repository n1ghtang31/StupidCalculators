//////////////Reverse Sales Tax Calculator////////////////////////
const getrstPriceWithTax = document.querySelector("#rstPriceWithTax");
const getrstTaxRate = document.querySelector("#rstTaxRate");
const displaytotalBeforeTax = document.querySelector("#totalBeforeTax");
const displaytaxedAmount = document.querySelector("#taxedAmount");
const displayrstTotal = document.querySelector("#rstTotal");


let rstPriceWithTax = getrstPriceWithTax.value;
let rstTaxRate = getrstTaxRate.value;
let listPrice = '0';

getrstPriceWithTax.addEventListener("change", () => {
    rstPriceWithTax = getrstPriceWithTax.value;
});

getrstTaxRate.addEventListener("change", () => {
    rstTaxRate = getrstTaxRate.value;
});

function updateDisplay() {
    displayrstTotal.innerText = `Total Amount: $${rstPriceWithTax}`;
    displaytaxedAmount.innerText = `Sales Tax: ${rstTaxRate}%`;
    displaytotalBeforeTax.innerText = `Price before Tax: $${listPrice}`;
}

function calculateReverseSalesTax(totalPrice, salesTax) {
    console.log(`Entering ${totalPrice} as the total and ${salesTax} as the tax rate`)
    let salesTaxPercentage = parseFloat(salesTax, 10) / 100;
    listPrice = totalPrice / (1 + salesTaxPercentage);
    listPrice = listPrice.toFixed(2);
    console.log(listPrice);
    updateDisplay();
    return listPrice;
};

