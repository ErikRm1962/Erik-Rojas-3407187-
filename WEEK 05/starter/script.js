
// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const book = "El Poder De Confiar En Ti";           
const bookStatus = "active";        
const bookValue = 85;          
const bookType = "Autoayuda";     
const bookInfo = null;           

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;
if (bookValue >= 90) {
    classification = "Bueno";
} else if (bookValue >= 60){
    classification = "Regular";
} else {
    classification = "Malo";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = bookStatus === "active" ? "Activo": "Inactivo"; 

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";

switch (bookType) {
  case "Autoayuda":typeLabel = "Autoayuda"; break;
  case "Ficción":typeLabel = "Ficción";   break;
  default:typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = book ?? "Sin nombre";      
const infoDetail = bookInfo ?? "Sin información adicional"  

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = bookInfo?.infoDetail ?? "detalle no disponible"; 

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
