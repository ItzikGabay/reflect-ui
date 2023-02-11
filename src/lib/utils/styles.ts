export const addClassByCondition = (
  condition: boolean | unknown,
  className: object | string
) => {
  return !!condition ? className : '';
};
