// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Sistema de Bibliotecas Digitales
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Sistema de Bibliotecas Digitales";
const VALUE_LABEL = "páginas";

const items = [
  { id: 1, name: "El Quijote", category: "clásico", value: 420, active: true },
  { id: 2, name: "Cien años de soledad", category: "ficción", value: 471, active: true },
  { id: 3, name: "Breve historia del tiempo", category: "ciencia", value: 212, active: false },
  { id: 4, name: "1984", category: "distopía", value: 328, active: true },
  { id: 5, name: "Sapiens", category: "no-ficción", value: 443, active: false },
  { id: 6, name: "El gen egoísta", category: "ciencia", value: 360, active: true },
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `📚 ${item.name} [${item.category}] — ${VALUE_LABEL}: ${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el tiempo estimado de lectura en horas (250 palabras por página, 200 palabras por minuto)
const calculateValue = (pages, wordsPerPage = 250) => {
  const totalWords = pages * wordsPerPage;
  const minutes = totalWords / 200;
  return +(minutes / 60).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un libro es válido si está disponible (active === true)
const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "") => {
  return currency
    ? `${label}: ${currency} ${value}`
    : `${label}: ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }
  console.log(formatWithDefault(totalValue, `Total horas estimadas de lectura`));
}

console.log(`\n${"═".repeat(45)}\n`);