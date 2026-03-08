# Potter Kata

## Descripción

[Descripción de la Kata en Coding Dojo](https://codingdojo.org/kata/Potter/)

Había una vez una serie de 5 libros acerca de un héroe inglés llamado Harry. Niños y niñas de todo el mundo pensaron que él era fantástico y por supuesto, también el editor. Por tanto, en un gesto de inmensa generosidad hacía la humanidad (y para incrementar las ventas), ellos establecieron el siguiente modelo de precios para aprovecharse de los poderes mágico de Harry.

Una copia de cualquiera de los cinco libros cuesta 8 EUR. Sin embargo, si tu compras dos libros diferentes de la serie, tendrás un 5% de descuento en esos dos libros. Si compras 3 libros diferentes, tendrás un 10% de descuento. Si son 4 libros diferentes, tendrás un 20% de descuento. Si vas con todo y compras la serie completa, los 5 libros diferentes, tendrán un gran descuento del 25%.

Así que si compras, digamos, cuatro libros de los cuales 3 son títulos diferentes tendrás 10% de descuento en los 3 que son parte de un conjunto, pero el cuarto libro seguirá costándote 8 EUR.

El mundo se ha vuelto loco con los libros de Harry y los padres y madres están haciendo colas para comprarlos. Tu misión es escribir el código para calcular el precio de cualquier cesta de la compra, dando el mayor descuento posible.

Por ejemplo, ¿Cuánto cuesta esta cesta de libros?

2 copias del primer libro
2 copias del segundo libro
2 copias del tercer libro
1 copia del cuarto libro
1 copia del quinto libro.

Respuesta:

```
(4 * 8) - 20% [primer libro, segundo libro, tercer libro, cuarto libro]
+ (4 * 8) - 20% [primer libro, segundo libro, tercer libro, quinto libro]
= 25.6 * 2
= 51.20
```

## Sugerencias de tests

Publicado originalmente en xp-france:

```
def testBasics
  assert_equal(0, price([]))
  assert_equal(8, price([1]))
  assert_equal(8, price([2]))
  assert_equal(8, price([3]))
  assert_equal(8, price([4]))
  assert_equal(8 * 3, price([1, 1, 1]))
end

def testSimpleDiscounts
  assert_equal(8 * 2 * 0.95, price([0, 1]))
  assert_equal(8 * 3 * 0.9, price([0, 2, 4]))
  assert_equal(8 * 4 * 0.8, price([0, 1, 2, 4]))
  assert_equal(8 * 5 * 0.75, price([0, 1, 2, 3, 4]))
end

def testSeveralDiscounts
  assert_equal(8 + (8 * 2 * 0.95), price([0, 0, 1]))
  assert_equal(2 * (8 * 2 * 0.95), price([0, 0, 1, 1]))
  assert_equal((8 * 4 * 0.8) + (8 * 2 * 0.95), price([0, 0, 1, 2, 2, 3]))
  assert_equal(8 + (8 * 5 * 0.75), price([0, 1, 1, 2, 3, 4]))
end

def testEdgeCases
  assert_equal(2 * (8 * 4 * 0.8), price([0, 0, 1, 1, 2, 2, 3, 4]))
  assert_equal(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8),
    price([0, 0, 0, 0, 0,
           1, 1, 1, 1, 1,
           2, 2, 2, 2,
           3, 3, 3, 3, 3,
           4, 4, 4, 4]))
end
```
