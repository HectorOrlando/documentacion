Open Food Facts organiza el objeto `nutriments` de manera bastante consistente, aunque algunos campos pueden no estar presentes en todos los productos. A continuación se muestra un ejemplo de cómo se estructura el objeto `nutriments` en Open Food Facts:

### Estructura General del Objeto `nutriments`

```json
{
  "nutriments": {
    "energy": 1913,
    "energy_unit": "kJ",
    "energy_100g": 1913,
    "energy_serving": 861,
    "energy-kcal": 462,
    "energy-kcal_unit": "kcal",
    "energy-kcal_100g": 462,
    "energy-kcal_serving": 208,
    "fat": 19,
    "fat_unit": "g",
    "fat_100g": 19,
    "fat_serving": 8.55,
    "saturated-fat": 2,
    "saturated-fat_unit": "g",
    "saturated-fat_100g": 2,
    "saturated-fat_serving": 0.9,
    "carbohydrates": 57,
    "carbohydrates_unit": "g",
    "carbohydrates_100g": 57,
    "carbohydrates_serving": 25.6,
    "sugars": 12,
    "sugars_unit": "g",
    "sugars_100g": 12,
    "sugars_serving": 5.4,
    "fiber": 10,
    "fiber_unit": "g",
    "fiber_100g": 10,
    "fiber_serving": 4.5,
    "proteins": 8.5,
    "proteins_unit": "g",
    "proteins_100g": 8.5,
    "proteins_serving": 3.83,
    "salt": 0,
    "salt_unit": "g",
    "salt_100g": 0,
    "salt_serving": 0,
    "sodium": 0,
    "sodium_unit": "g",
    "sodium_100g": 0,
    "sodium_serving": 0,
    "vitamin-b1": 0.00019,
    "vitamin-b1_unit": "mg",
    "vitamin-b1_100g": 0.00019,
    "vitamin-b1_serving": 8.55e-05,
    "fruits-vegetables-nuts-estimate-from-ingredients_100g": 10.7,
    "fruits-vegetables-nuts-estimate-from-ingredients_serving": 10.7,
    "nova-group": 4,
    "nova-group_100g": 4,
    "nova-group_serving": 4,
    "nutrition-score-fr": -2,
    "nutrition-score-fr_100g": -2
  }
}
```

### Campos Comunes en `nutriments`

1. **Energía**
   - `energy`
   - `energy_unit`
   - `energy_100g`
   - `energy_serving`
   - `energy-kcal`
   - `energy-kcal_unit`
   - `energy-kcal_100g`
   - `energy-kcal_serving`

2. **Grasas**
   - `fat`
   - `fat_unit`
   - `fat_100g`
   - `fat_serving`
   - `saturated-fat`
   - `saturated-fat_unit`
   - `saturated-fat_100g`
   - `saturated-fat_serving`

3. **Carbohidratos**
   - `carbohydrates`
   - `carbohydrates_unit`
   - `carbohydrates_100g`
   - `carbohydrates_serving`
   - `sugars`
   - `sugars_unit`
   - `sugars_100g`
   - `sugars_serving`

4. **Fibra**
   - `fiber`
   - `fiber_unit`
   - `fiber_100g`
   - `fiber_serving`

5. **Proteínas**
   - `proteins`
   - `proteins_unit`
   - `proteins_100g`
   - `proteins_serving`

6. **Sal y Sodio**
   - `salt`
   - `salt_unit`
   - `salt_100g`
   - `salt_serving`
   - `sodium`
   - `sodium_unit`
   - `sodium_100g`
   - `sodium_serving`

7. **Vitaminas y Minerales**
   - `vitamin-b1`
   - `vitamin-b1_unit`
   - `vitamin-b1_100g`
   - `vitamin-b1_serving`
   - `phosphorus`
   - `phosphorus_unit`
   - `phosphorus_100g`
   - `phosphorus_serving`
   - `iron`
   - `iron_unit`
   - `iron_100g`
   - `iron_serving`

8. **Estimaciones de Ingredientes**
   - `fruits-vegetables-nuts-estimate-from-ingredients_100g`
   - `fruits-vegetables-nuts-estimate-from-ingredients_serving`

9. **Grupos NOVA**
   - `nova-group`
   - `nova-group_100g`
   - `nova-group_serving`

10. **Puntuación Nutricional**
    - `nutrition-score-fr`
    - `nutrition-score-fr_100g`

### Generación de la Tabla en TypeScript

A continuación, te muestro cómo podrías generar la tabla nutricional usando esta estructura en TypeScript:

```typescript
interface Nutriments {
    energy: number;
    energy_unit: string;
    energy_100g: number;
    energy_serving: number;
    energy_kcal: number;
    energy_kcal_unit: string;
    energy_kcal_100g: number;
    energy_kcal_serving: number;
    fat: number;
    fat_unit: string;
    fat_100g: number;
    fat_serving: number;
    saturated_fat: number;
    saturated_fat_unit: string;
    saturated_fat_100g: number;
    saturated_fat_serving: number;
    carbohydrates: number;
    carbohydrates_unit: string;
    carbohydrates_100g: number;
    carbohydrates_serving: number;
    sugars: number;
    sugars_unit: string;
    sugars_100g: number;
    sugars_serving: number;
    fiber: number | null;
    fiber_unit: string;
    fiber_100g: number | null;
    fiber_serving: number | null;
    proteins: number;
    proteins_unit: string;
    proteins_100g: number;
    proteins_serving: number;
    salt: number;
    salt_unit: string;
    salt_100g: number;
    salt_serving: number;
    sodium: number;
    sodium_unit: string;
    sodium_100g: number;
    sodium_serving: number;
    vitamin_b1: number;
    vitamin_b1_unit: string;
    vitamin_b1_100g: number;
    vitamin_b1_serving: number;
    phosphorus: number;
    phosphorus_unit: string;
    phosphorus_100g: number;
    phosphorus_serving: number;
    iron: number;
    iron_unit: string;
    iron_100g: number;
    iron_serving: number;
    fruits_vegetables_nuts_estimate_from_ingredients_100g: number | null;
    fruits_vegetables_nuts_estimate_from_ingredients_serving: number | null;
    nova_group: number;
    nova_group_100g: number;
    nova_group_serving: number;
    nutrition_score_fr: number;
    nutrition_score_fr_100g: number;
}

interface Product {
    code: string;
    product: {
        nutriments: Nutriments;
        product_name_es: string;
    };
}

const productJson: Product = {
    code: "3168930010265",
    product: {
        nutriments: {
            energy: 1913,
            energy_unit: "kJ",
            energy_100g: 1913,
            energy_serving: 861,
            energy_kcal: 462,
            energy_kcal_unit: "kcal",
            energy_kcal_100g: 462,
            energy_kcal_serving: 208,
            fat: 19,
            fat_unit: "g",
            fat_100g: 19,
            fat_serving: 8.55,
            saturated_fat: 2,
            saturated_fat_unit: "g",
            saturated_fat_100g: 2,
            saturated_fat_serving: 0.9,
            carbohydrates: 57,
            carbohydrates_unit: "g",
            carbohydrates_100g: 57,
            carbohydrates_serving: 25.6,
            sugars: 12,
            sugars_unit: "g",
            sugars_100g: 12,
            sugars_serving: 5.4,
            fiber: 10,
            fiber_unit: "g",
            fiber_100g: 10,
            fiber_serving: 4.5,
            proteins: 8.5,
            proteins_unit: "g",
            proteins_100g: 8.5,
            proteins_serving: 3.83,
            salt: 0,
            salt_unit: "g",
            salt_100g: 0,
            salt_serving: 0,
            sodium: 0,
           

 sodium_unit: "g",
            sodium_100g: 0,
            sodium_serving: 0,
            vitamin_b1: 0.00019,
            vitamin_b1_unit: "mg",
            vitamin_b1_100g: 0.00019,
            vitamin_b1_serving: 8.55e-05,
            phosphorus: 0.24,
            phosphorus_unit: "mg",
            phosphorus_100g: 0.24,
            phosphorus_serving: 0.108,
            iron: 0.0021,
            iron_unit: "mg",
            iron_100g: 0.0021,
            iron_serving: 0.000945,
            fruits_vegetables_nuts_estimate_from_ingredients_100g: 10.7,
            fruits_vegetables_nuts_estimate_from_ingredients_serving: 10.7,
            nova_group: 4,
            nova_group_100g: 4,
            nova_group_serving: 4,
            nutrition_score_fr: -2,
            nutrition_score_fr_100g: -2
        },
        product_name_es: "Barra de Cereal"
    }
};

interface TablaNutricional {
    "Energía (kJ)": number | null;
    "Energía (kcal)": number | null;
    "Grasas (g)": number | null;
    "Grasas saturadas (g)": number | null;
    "Hidratos de carbono (g)": number | null;
    "Azúcares (g)": number | null;
    "Fibra alimentaria (g)": number | null;
    "Proteínas (g)": number | null;
    "Sal (g)": number | null;
    "Sodio (g)": number | null;
    "Vitamina B1 (mg)": number | null;
    "Fósforo (mg)": number | null;
    "Hierro (mg)": number | null;
    "Frutas, verduras, nueces y legumbres (%)": number | null;
    "Grupo NOVA": number | null;
    "Puntuación nutricional (FR)": number | null;
}

const tablaNutricional: TablaNutricional = {
    "Energía (kJ)": productJson.product.nutriments.energy,
    "Energía (kcal)": productJson.product.nutriments.energy_kcal,
    "Grasas (g)": productJson.product.nutriments.fat,
    "Grasas saturadas (g)": productJson.product.nutriments.saturated_fat,
    "Hidratos de carbono (g)": productJson.product.nutriments.carbohydrates,
    "Azúcares (g)": productJson.product.nutriments.sugars,
    "Fibra alimentaria (g)": productJson.product.nutriments.fiber,
    "Proteínas (g)": productJson.product.nutriments.proteins,
    "Sal (g)": productJson.product.nutriments.salt,
    "Sodio (g)": productJson.product.nutriments.sodium,
    "Vitamina B1 (mg)": productJson.product.nutriments.vitamin_b1,
    "Fósforo (mg)": productJson.product.nutriments.phosphorus,
    "Hierro (mg)": productJson.product.nutriments.iron,
    "Frutas, verduras, nueces y legumbres (%)": productJson.product.nutriments.fruits_vegetables_nuts_estimate_from_ingredients_100g,
    "Grupo NOVA": productJson.product.nutriments.nova_group,
    "Puntuación nutricional (FR)": productJson.product.nutriments.nutrition_score_fr
};

// Mostrar la tabla
console.log("Tabla Nutricional:");
for (const [key, value] of Object.entries(tablaNutricional)) {
    console.log(`${key}: ${value}`);
}
```

Este código lee los valores del objeto `nutriments` y los organiza en una tabla nutricional estándar. Puede ser adaptado para manejar la ausencia de ciertos valores y agregar más campos según sea necesario.