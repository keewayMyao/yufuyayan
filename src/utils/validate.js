/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNickName(str) {
  const valid_map = ['']
  return valid_map.indexOf(str.trim()) >= 0
}
// export function validUserPhone(str) {
//   const valid_map = [/^[1][3,4,5,7,8,9][0-9]{9}$/]
//   return valid_map.indexOf(str.trim()) >= 0
// }
