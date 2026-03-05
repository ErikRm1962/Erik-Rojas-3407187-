
// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Sistema de Bibliotecas Digitales";

const itemName = "El coronel no tiene quien le escriba";

const itemCategory = "Novela";

const itemQuantity = 15; // cantidad de libros disponibles

const isItemAvailable = true;

const borrowedByUser = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:    ${itemName}`);

console.log(`Categoría: ${itemCategory}`);

console.log(`Cantidad: ${itemQuantity}`);

console.log(`Disponible: ${isItemAvailable}`);
 



// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);

console.log("typeof itemCategory:", typeof itemCategory);

console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("typeof borrowedByUser:", typeof borrowedByUser);



// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

const availabilityText = String(isItemAvailable);

console.log("Disponibilidad como texto", availabilityText);

const borrowedByUserBoolean = Boolean(borrowedByUser);

console.log("Disponibilidad como booleano", borrowedByUserBoolean);

const quantityText = String(itemQuantity);

console.log("Cantidad como texto:", quantityText);


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Valor pendiente:", borrowedByUser);

console.log("Esta prestado a alguien?", borrowedByUser);

console.log("typeof null:", typeof borrowedByUser);

console.log("¿Es null?:", borrowedByUser === null);


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
