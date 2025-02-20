import Fizzbuzz from "./Fizzbuzz.js"

// Primer intento

describe("Fizzbuzz", () => {
    it("deberia devolver el numero en si en modo de cadena", () => {
      expect(Fizzbuzz()).toEqual("num");
    });
  });


// Segundo intento

describe("Fizzbuzz", () => {
    it("deberia volver un numero multiplo de 3", () => {
        expect(Fizzbuzz(6)).toEqual("Fizz");
    });
});

