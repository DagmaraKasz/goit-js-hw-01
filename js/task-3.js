
function getElementWidth(content, padding, border) {
    const paddingx2 = 2 * parseFloat(padding);
    const borderx2 = 2 * parseFloat(border);
    const elementWidth = parseFloat(content) + paddingx2 + borderx2;
 
  return elementWidth;
}

// Sprawdzenie skryptu:
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200