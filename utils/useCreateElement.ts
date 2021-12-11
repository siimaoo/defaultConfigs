const useCreateElement = <E = HTMLElement>(tag: string, config: Record<string, any>) => {
  const element = document.createElement(tag) as unknown as E;
  Object.keys(config).forEach((key) => {
    element[key] = config[key];
  });
  return element;
};

export { useCreateElement };
