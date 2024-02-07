export const transformNumber = (val: string) => {
  return val
    .replace(/[^.0-9]/g, '')
    .replace(/^([^.]*\.)(.*)$/, function (a, b, c) {
      return b + c.replace(/\./g, '');
    });
};
