export default function guardrail(mathFunction) {
  const returnList = [];
  try {
    const result = mathFunction();
    returnList.push(result);
  } catch (error) {
    returnList.push(`Error: ${error.message}`);
  } finally {
    returnList.push('Guardrail was processed');
  }
  return returnList;
}
