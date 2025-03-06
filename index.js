import { DiscountService } from "./src/DiscountService.js";

// Создаем экземпляр сервиса
const service = new DiscountService();

// Создаем стратегию скидок (пример)
const percentageDiscount = {
  apply: (price) => price * 0.8, // 20% скидка
};

// Устанавливаем стратегию
service.setDiscountStrategy(percentageDiscount);

// Получаем цену со скидкой
const finalPrice = service.getFinalPrice(1000);
console.log(finalPrice); // 800

// Получаем историю скидок
const history = service.getDiscountHistory();
console.log(history); // [{ originalPrice: 1000, discountedPrice: 800 }]

// Очищаем историю
service.clearHistory();
console.log(service.getDiscountHistory()); // []