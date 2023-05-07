/*


    *****
   *   * 
  *   *  
 *   *
*****

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    // spaces
    for (let space = 1; space < n - row + 1; space++) {
      result += " ";
    }
    // stars

    for (let col = 1; col <= n; col++) {
      row === 1 || row === n || col === 1 || col === n
        ? (result += "*")
        : (result += " ");
    }
    if (n != row) result += "\n";
  }
  return result;
}

console.log(pattern(5));
