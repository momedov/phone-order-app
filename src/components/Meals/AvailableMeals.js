import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samsung Galaxy A03 Core 32GB Синий",
    description: "8-ядерный Unisoc SC9863A 1.60 ГГц, экран 6.5 дюймов",
    price: 224.99,
  },
  {
    id: "m2",
    name: "HUAWEI NOVA 9 128GB Звездно-голубой",
    description: " 4-ядерный MediaTek Helio A22 2.00 ГГц, экран 6.7 дюймов",
    price: 168.5,
  },
  {
    id: "m3",
    name: "Honor 50 8/256GB Полночный черный",
    description:
      "8-ядерный Qualcomm Snapdragon 778G 2.40 ГГц, экран 5.5 дюймов",
    price: 212.99,
  },
  {
    id: "m4",
    name: "Xiaomi Redmi Note 10S 64GB Pebble White",
    description:
      "8-ядерный MediaTek HelioG95 2.05 ГГц, графический ускоритель Mali-G76",
    price: 189.99,
  },
  {
    id: "m5",
    name: "Apple iPhone 13 Pro 128GB Графитовый",
    description:
      "6-ядерный процессор Apple A15 Bionic, Тип дисплея: Super Retina XDR, экран 6.1 дюйма''",
    price: 189.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <div>
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </div>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
