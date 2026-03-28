// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Sistema de Bibliotecas Digitales
// ============================================

const DOMAIN_NAME = "Biblioteca Digital";
const VALUE_LABEL = "libros";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "El Quijote", author: "Cervantes", pages: 420, available: true },
  { id: 2, name: "Cien años de soledad", author: "García Márquez", pages: 471, available: true },
  { id: 3, name: "Breve historia del tiempo", author: "Hawking", pages: 212, available: false },
  { id: 4, name: "1984", author: "Orwell", pages: 328, available: true },
  { id: 5, name: "Sapiens", author: "Harari", pages: 443, available: false },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado (último): ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado en posición ${index}: ${removed[0].name}`);
};

const getActiveItems = () => {
  return items.filter((item) => item.available === true);
};

const findByName = (name) => {
  return items.find((item) => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — Autor: ${item.author} — Páginas: ${item.pages} — Disponible: ${item.available ? "Sí" : "No"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

addItem({ id: 6, name: "El gen egoísta", author: "Dawkins", pages: 360, available: true });

addPriorityItem({ id: 0, name: "Don Segundo Sombra", author: "Güiraldes", pages: 280, available: true });

removeByIndex(2);

removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

const found = findByName("1984");
console.log(`Búsqueda de "1984": ${found ? formatItem(found) : "No encontrado"}`);

const activeItems = getActiveItems();
console.log(`Libros disponibles: ${activeItems.length}`);

const snapshot = [...items, { id: 99, name: "Snapshot Extra", author: "Anónimo", pages: 100, available: true }];
console.log(`Snapshot (sin modificar items): ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

const names = items.map((item) => item.name);
console.log("Nombres:", names);

const pagesInChapters = items.map((item) => ({
  name: item.name,
  estimatedChapters: Math.round(item.pages / 20),
}));
pagesInChapters.forEach((b) => console.log(`  ${b.name} — Capítulos estimados: ${b.estimatedChapters}`));

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);