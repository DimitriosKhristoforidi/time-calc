export const splitStringToTime = (text) => {
  const [hour, minute] = text.split(":")
  return {hour, minute}
}