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
