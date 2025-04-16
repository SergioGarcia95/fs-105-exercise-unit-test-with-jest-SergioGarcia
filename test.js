

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    
    expect(dollars).toBe(expected);
})

test("One dollar should be 156.5 yen", function() {

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(4);

    const expected = 4 * 156.5;

    expect(yen).toBe(expected);
})

test("One yen should be 0.87", function() {

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(7.5);

    const expected = 7.5 * 0.87;

    expect(pound).toBe(expected);
})

