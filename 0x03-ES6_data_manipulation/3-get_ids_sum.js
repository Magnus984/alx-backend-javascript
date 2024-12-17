export default function getStudentIdsSum(studentIds) {
  const initialValue = 0;
  return studentIds.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
}
