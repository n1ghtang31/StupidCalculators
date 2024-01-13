function calculateReverseSalesTax(totalPrice, salesTax) {
    let salesTaxPercentage = parseFloat(salesTax, 10) / 100;
    
    let listPrice = totalPrice / (1 + salesTaxPercentage);
    console.log(listPrice);
    return listPrice;
}