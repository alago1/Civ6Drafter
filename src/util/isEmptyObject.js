export const isEmptyObject = (obj) => {
  return (
    typeof obj === "object" &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
};
