//////////////Reverse Sales Tax Calculator////////////////////////
const getrstPriceWithTax = document.querySelector("#rstPriceWithTax");
const getrstTaxRate = document.querySelector("#rstTaxRate")

let rstPriceWithTax = getrstPriceWithTax.value;
let rstTaxRate = getrstTaxRate.value;
let listPrice = '0';

getrstPriceWithTax.addEventListener("change", () => {
    rstPriceWithTax = getrstPriceWithTax.value;
});

getrstTaxRate.addEventListener("change", () => {
    rstTaxRate = getrstTaxRate.value;
});

function calculateReverseSalesTax(totalPrice, salesTax) {
    console.log(`Entering ${totalPrice} as the total and ${salesTax} as the tax rate`)
    let salesTaxPercentage = parseFloat(salesTax, 10) / 100;
    
    listPrice = totalPrice / (1 + salesTaxPercentage);
    console.log(listPrice);
    return listPrice;
};

