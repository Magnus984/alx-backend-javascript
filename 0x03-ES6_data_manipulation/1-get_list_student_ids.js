export default function getListStudentIds(arrayOfObjs) {
  if (!Array.isArray(arrayOfObjs)) {
    return [];
  }
  const ids = arrayOfObjs.map((obj) => obj.id);
  return ids;
}
