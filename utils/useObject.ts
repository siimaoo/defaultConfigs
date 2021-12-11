const useObject = () => {
  const isObject = (value: any) => typeof value === 'object' && !Array.isArray(value);

  const convertCase = (
    object: Record<string, any>,
    caseFunction: (stringToConvert: string) => string,
  ) => {
    const processValue = (value: any) => {
      if (!isObject(value) || value === null) return value;
      if (Array.isArray(value)) return value.map(renameKeys);
      return renameKeys(value);
    };

    const renameKeys = (obj: Record<string, any>) => {
      const arr = Object.entries(obj).map(([key, value]) => {
        const keyValue = [(key = caseFunction(key)), processValue(value)];
        return keyValue;
      });

      return Object.fromEntries(arr);
    };

    return renameKeys(object);
  };

  return { isObject, convertCase };
};

export { useObject };
