import { CHANGEDATA } from '../common/actionType.js'

export function changeData(n) {
  return {
    type: CHANGEDATA,
    data: n
  }
}