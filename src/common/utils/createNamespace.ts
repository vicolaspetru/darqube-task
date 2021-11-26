const createNamespace = <T extends readonly string[], N extends string = string>(
  namespace: N,
  suffixes: T
) => {
  return suffixes.reduce(
    (acc, suffix) => ({
      ...acc,
      [suffix]: `${namespace}_${suffix}`
    }),
    {} as { [P in typeof suffixes[number]]: `${N}_${P}` }
  );
};

export default createNamespace;
