export default function handleInitialSelection(
  value,
  placeholder,
  options,
  grouped
) {
  switch (true) {
    case value.length !== 0:
      return value;

    case placeholder !== "":
      return [];

    case options.length !== 0:
      return grouped
        ? [options[0].options.find((e) => e?.disabled !== true)]
        : [options.find((e) => e?.disabled !== true)]; // grouped condition return

    default:
      return [];
  }
}
