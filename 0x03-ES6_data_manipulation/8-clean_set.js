export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let newStr = '';
  if (set instanceof Set && typeof startString === 'string') {
    Array.from(set).forEach((element) => {
      if (element.startsWith(startString)) {
        newStr += `${element.slice(startString.length)}-`;
      }
    });
  }
  return newStr.slice(0, -1);
}
