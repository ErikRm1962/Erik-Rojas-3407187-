// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

 const bookPrice = 25_000; // precio de un libro digital

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

console.log("");

console.log("Precio por libro:", bookPrice);

const booksSold = 120;
const totalRevenue = bookPrice * booksSold;
const discount = totalRevenue * 0.10;
const finalRevenue = totalRevenue - discount;

console.log("Ingresos totales sin descuento:", totalRevenue);
console.log("Descuento aplicado:", discount);
console.log("Ingresos finales con descuento:", finalRevenue);

console.log("");
// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================

console.log("=== Asignación compuesta ===");

console.log("");

let booksAvailable = 200;
booksAvailable -= 50;
console.log("Libros disponibles despues de la venta:", booksAvailable);
booksAvailable += 30;
console.log("Libros disponibles despues del reStock:", booksAvailable);
booksAvailable *= 2.5;
console.log("Libros disponibles despues del aumento de inventario:", booksAvailable);
booksAvailable /= 1.5;
console.log("Libros disponibles despues de la corrección por error:", booksAvailable);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

console.log("");

const bookSales = 120;
const most_sales = bookSales === 150;
console.log("¿Se vendieron 150 libros?", most_sales);

const isBestSeller = bookSales === 120;
console.log ("Es un bestSeller??", isBestSeller);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

console.log("");

const isPopular = true;
const isAffordable = bookPrice < 30_000;
const isRecommended = isPopular && isAffordable;
console.log("¿Es un libro recomendado?", isRecommended);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("");

console.log("Ingresos finales:", finalRevenue);
console.log("Libros disponibles:", booksAvailable);
console.log("Es un libro recomendado?", isRecommended);

console.log("");
