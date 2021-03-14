export function padding(top: number, right: number, bottom?: number, left?: number) {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom ? bottom : top,
    paddingLeft: left ? left : right
  }
}