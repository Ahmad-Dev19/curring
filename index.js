function calculateTax(taxRate) {
    return function(amount) {
      return amount * taxRate;
    };
  }
  
  const californiaTax = calculateTax(0.08); 
  const newYorkTax = calculateTax(0.07);   
  
  
  console.log(californiaTax(100)); 
  console.log(newYorkTax(100));    
  