
import { describe, it, expect } from '@jest/globals';
import {
  calculateDiscountedPrice,
  hasSignificantDiscount,
  formatPrice,
} from '../product.utils';

describe('Product Utilities', () => {
  describe('calculateDiscountedPrice', () => {
    it('should calculate correct discounted price', () => {
      expect(calculateDiscountedPrice(100, 10)).toBe(90);
      expect(calculateDiscountedPrice(50, 20)).toBe(40);
      expect(calculateDiscountedPrice(200, 50)).toBe(100);
    });

    it('should return original price when discount is 0', () => {
      expect(calculateDiscountedPrice(100, 0)).toBe(100);
    });

    it('should return original price when discount is negative', () => {
      expect(calculateDiscountedPrice(100, -10)).toBe(100);
    });

    it('should handle decimal discounts', () => {
      expect(calculateDiscountedPrice(100, 12.5)).toBe(87.5);
    });
  });

  describe('hasSignificantDiscount', () => {
    it('should return true for discounts greater than 0.5%', () => {
      expect(hasSignificantDiscount(1)).toBe(true);
      expect(hasSignificantDiscount(10)).toBe(true);
      expect(hasSignificantDiscount(0.6)).toBe(true);
    });

    it('should return false for discounts less than or equal to 0.5%', () => {
      expect(hasSignificantDiscount(0.5)).toBe(false);
      expect(hasSignificantDiscount(0.3)).toBe(false);
      expect(hasSignificantDiscount(0)).toBe(false);
    });
  });

  describe('formatPrice', () => {
    it('should format price to 2 decimal places', () => {
      expect(formatPrice(100)).toBe('100.00');
      expect(formatPrice(99.99)).toBe('99.99');
      expect(formatPrice(49.5)).toBe('49.50');
    });

    it('should handle large numbers', () => {
      expect(formatPrice(1234.567)).toBe('1234.57');
    });

    it('should handle zero', () => {
      expect(formatPrice(0)).toBe('0.00');
    });
  });
});