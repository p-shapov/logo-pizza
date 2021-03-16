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