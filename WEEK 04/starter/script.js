

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================


const DOMAIN_NAME = "Sistema de Bibliotecas Digitales";

const rawEntityName = "  Libro Digital: Metaformosis  ";

const entityCategory = "Libro Digital";

const entityCode = "LIB-192";

const entityDescription = "Libro digital que trata sobre la transformacion de un hombre.";

const mainValue = 120; 

const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith("LIB");

const descriptionIsRelevant = entityDescription.includes("transformacion");

const hasValidSuffix = entityCode.endsWith("192");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con  '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'transformacion'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '192'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo elemento disponible: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");
