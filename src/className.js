export default function className(classNamePrefix, element) {
  return classNamePrefix
    ? `dd-${element} ${classNamePrefix}-${element}`
    : `dd-${element}`;
}
