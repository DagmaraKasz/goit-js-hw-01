
function getElementWidth(content, padding, border) {
    console.log(Number.parseFloat("50px"));
    console.log(Number.parseFloat("8px"));
    console.log(Number.parseFloat("4px"));
    console.log(Number.parseFloat("60px"));
    console.log(Number.parseFloat("12px"));
    console.log(Number.parseFloat("8.5px"));
    console.log(Number.parseFloat("200px"));
    console.log(Number.parseFloat("0px"));
    console.log(Number.parseFloat("0px"));
    const paddingx2 = 2 * padding;
    const borderx2 = 2 * border;
    const elementWidth = content + paddingx2 + borderx2;

  return elementWidth;

}

// Sprawdzenie skryptu:
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200