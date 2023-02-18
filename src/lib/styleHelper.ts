export const styleHelper = (style = {}): string => {
  if (!style) return "";
  let returnedStyleString: string = "";
  let styleKeys: string[] = Object.keys(style);
  let styleValue: any[] = Object.values(style);

  styleKeys.forEach((key: string, index: number) => {
    returnedStyleString += `${key}: ${styleValue[index]};`;
  });

  return returnedStyleString.trim();
};
