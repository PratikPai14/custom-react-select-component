export default function isOptionInSelection(option, selection) {
  if (selection.some((current) => current.value === option.value)) {
    return true;
  }
  return false;
}
