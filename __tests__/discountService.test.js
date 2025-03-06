import { DiscountService } from "../src/DiscountService.js";

let service;

beforeEach(() => {
  service = new DiscountService();
});

describe('DiscontService module', () => {
  test('initial state', () => {
    expect(service.getDiscountHistory()).toEqual([]);
    expect(() => service.getFinalPrice()).toThrow('Стратегия скидок не установлена');
  });
  test('default work', () => {
    const data = { 
      price: 1000,
      finalPrice: 800,
      history: [{ originalPrice: 1000, discountedPrice: 800 }],
      strategy: { apply: (price) => price * 0.8 },
    }

    service.setDiscountStrategy(data.strategy);

    expect(service.getFinalPrice(data.price)).toBe(data.finalPrice);
    expect(service.getDiscountHistory()).toEqual(data.history);

    service.clearHistory();
    expect(service.getDiscountHistory()).toEqual([]);
  });
});