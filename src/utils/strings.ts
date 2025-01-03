export function getCapitalizedString(randomStr?: string) {
  const isValidString = !!randomStr && typeof randomStr === "string";

  if (!isValidString) {
    return randomStr;
  }

  const isStringLongEnough = randomStr.length >= 2;

  if (!isStringLongEnough) {
    return randomStr;
  }

  return randomStr.substring(0, 1).toUpperCase() + randomStr.substring(1);
}

export function getFormattedCharacterBodyColor(randomStr?: string) {
  if (randomStr?.toLowerCase() === "n/a") {
    return "Unknown";
  }

  return randomStr?.replaceAll(",", "");
}
