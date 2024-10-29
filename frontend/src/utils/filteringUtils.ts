import {Book, Filter, RangeFilter} from "../data-types.ts";

export const parseFiltersFromURL = (urlParams: URLSearchParams): Filter[] => {
  const filters: Filter[] = [];

  for (const [key, value] of urlParams.entries()) {
    const nestedFields = key.split('.');

    if (key.endsWith('.min') || key.endsWith('.max')) {
      const field = nestedFields[0]; // Наприклад, price
      const rangeKey = key.split('.').pop()!; // Визначаємо, min чи max

      let rangeFilter = filters.find(
        (f) => 'field' in f && f.field === field,
      ) as RangeFilter | undefined;

      if (!rangeFilter) {
        rangeFilter = { field: field };
        filters.push(rangeFilter);
      }

      if (rangeKey === 'min') {
        rangeFilter.min = parseFloat(value);
      } else if (rangeKey === 'max') {
        rangeFilter.max = parseFloat(value);
      }
    } else {
      filters.push({
        field: nestedFields.pop()!,
        value: isNaN(Number(value)) ? value : Number(value), // Приводимо значення до числа, якщо це можливо
        nested: nestedFields.length > 0 ? nestedFields : undefined,
      });
    }
  }

  return filters;
};

export const applyFilters = (data: Book[], filters: Filter[]): Book[] => {
  return data.filter((item) => {
    return filters.every((filter) => {
      let valueToCheck = item;

      if ('nested' in filter && filter.nested) {
        valueToCheck = getNestedValue(item, filter.nested);
      }

      if ('min' in filter || 'max' in filter) {
        const fieldValue = valueToCheck[filter.field] as number;
        if (filter.min !== undefined && fieldValue < filter.min) return false;
        if (filter.max !== undefined && fieldValue > filter.max) return false;
      } else {
        return valueToCheck[filter.field] === filter.value;
      }

      return true;
    });
  });
};

const getNestedValue = (obj: any, path: string[]): any => {
  return path.reduce(
    (value, key) =>
      value && value[key] !== undefined ? value[key] : undefined,
    obj,
  );
};
