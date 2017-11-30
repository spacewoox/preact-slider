export const toArrayOfXElement = (datas, x)  =>
  datas.map(
    (item, index) => index % x === 0 ?
    datas.slice(index, index + x) : null
  ).filter(x => x)


