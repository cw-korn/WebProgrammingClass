// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
  var quantityFrench = document.getElementById("french").value;
  var quantityHazel = document.getElementById("hazel").value;
  var quantityColum = document.getElementById("colum").value;
  var priceFrench = 3.49;
  var priceHazel = 3.95;
  var priceColum = 4.59;
  var totalCost = (priceFrench * quantityFrench)+(priceHazel*quantityHazel)+(priceColum*quantityColum);
  if (quantityFrench < 0 || quantityHazel < 0 || quantityColum < 0) {
    alert("Invalid Input");
  } else {
// Compute the cost
  document.getElementById("cost").value = totalCost;
  }
}  //* end of computeCost
