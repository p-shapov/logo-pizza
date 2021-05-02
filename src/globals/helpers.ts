export function padding(top: number, right: number, bottom?: number, left?: number) {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom !== undefined ? bottom : top,
    paddingLeft: left !== undefined ? left : right
  };
}

export function margin(top: number, right: number, bottom?: number, left?: number) {
  return {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom !== undefined ? bottom : top,
    marginLeft: left !== undefined ? left : right
  };
}

export function objectIncludes(obj1: Object, obj2: Object) {
  const valuesEntries = [];

  for (let key in obj2) {
    if (obj1[key as keyof Object]) {
      valuesEntries.push(obj1[key as keyof Object] === obj2[key as keyof Object]);
    } else {
      return false;
    }
  }

  return (!valuesEntries.includes(false));
}

export function arrayIncludes(array: Array<Object>, obj: Object) {
  return (
    array.some((item) => {
      const valuesEntries = [];

      for (let key in obj) {
        valuesEntries.push(obj[key as keyof Object] === item[key as keyof Object]);
      }

      return (!valuesEntries.includes(false));
    })
  );
}