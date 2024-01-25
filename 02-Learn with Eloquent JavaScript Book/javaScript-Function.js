
// JavaScript Funsction 

const squre = function (x) {
    return x * x;
}
console.log(squre(5));

const power = function (base, exponent) {
    let result = 1;
    for(let i=0; i<exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2,10));

const hummus = function(factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
      ingredient(0.25, "cup", "tahini");
      ingredient(0.25, "cup", "lemon juice");
      ingredient(1, "clove", "garlic");
      ingredient(2, "tablespoon", "olive oil");
      ingredient(0.5, "teaspoon", "cumin");
}

const power = (base, exponent) => {
    let result = 1;
    for(let i=0; i<exponent; i++) result *= base;
    return result;
}
console.log(power(2,10));

function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  }
  console.log(chicken() + " came first.");

function mins(a, b) {
    if(b===undefined) return -a;
    else return a - b;
}
console.log(mins(10,5));

function multiple (factor) {
    let result = function (number) {
        return number * factor;
    }
    return result;
}

const twice = multiple(2);
console.log(twice(5));

function power (base, exponent) {
    if(exponent == 0) return 1;
    else return base * power(base,exponent-1);
}
console.log(power(2,3));