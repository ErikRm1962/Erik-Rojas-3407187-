// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Sistema de Bibliotecas Digitales
// ============================================

const books = [
  { name: "El Quijote", category: "clásico", value: 420 },
  { name: "Cien años de soledad", category: "ficción", value: 471 },
  { name: "Breve historia del tiempo", category: "ciencia", value: 212 },
  { name: "1984", category: "distopía", value: 328 },
  { name: "Sapiens", category: "no-ficción", value: 443 },
  { name: "El gen egoísta", category: "ciencia", value: 360 },
];

const categories = ["clásico", "ficción", "ciencia", "distopía", "no-ficción"];

const valueLabel = "páginas";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of books) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of books) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of books) {
  totalValue += item.value;
}

const averageValue = books.length > 0 ? totalValue / books.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = books[0] ?? null;
let minItem = books[0] ?? null;

if (books.length > 0) {
  for (const item of books) {
    if (item.value > maxItem.value) maxItem = item;
    if (item.value < minItem.value) minItem = item;
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < books.length; i++) {
  const item = books[i];

  const comparison = item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");