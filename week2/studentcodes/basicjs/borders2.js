// borders2.js 
//   An example of a switch statement for table border
//   size selection

var bordersize;
bordersize = prompt("Select a table border size \n" +
                    "0 (no border) \n" +
                    "1 (1 pixel border) \n" +
                    "4 (4 pixel border) \n" +
                    "8 (8 pixel border) \n");

switch (bordersize) {
  case "0": document.write("<table>");
            break;
  case "1": document.write("<table border = '1'>");
            break;
  case "4": document.write("<table border = '4'>");
            break;
  case "8": document.write("<table border = '8'>");
            break;
  default:  document.write("Error - invalid choice: ", 
                            bordersize, "<br />");
} 

document.write("<caption> 2006 NFL Divisional",
               " Winners </caption>");
document.write("<tr>",
               "<th />",
               "<th> American Conference </th>",
               "<th> National Conference </th>",
               "</tr>",
               "<tr>",
               "<th> East </th>",
               "<td> New England Patriots </td>",
               "<td> Philadelphia Eagles </td>",
               "</tr>",
               "<tr>",
               "<th> North </th>",
               "<td> Baltimore Ravens </td>",
               "<td> Chicago Bears </td>",
               "</tr>",
               "<tr>",
               "<th> West </th>",
               "<td> San Diego Chargers </td>",
               "<td> Seattle Seahawks </td>",
               "</tr>",
               "<tr>",
               "<th> South </th>",
               "<td> Indianapolis Colts </td>",
               "<td> New Orleans Saints </td>",
               "</tr>",
               "</table>");
