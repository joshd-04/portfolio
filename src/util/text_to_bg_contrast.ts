import convert from 'color-convert';

// When a skill is hovered, the background color should change
// However sometimes the text color doesnt contrast well with the new background
// So we need to calculate the contrast and decide whether white text or black text is suitable
// Lumincance, L = 0.2126 * R + 0.7152 * G + 0.0722 * B
// Contrast = (L1 + 0.05) / (L2 + 0.05), l1 = light, l2 = darker

export function decideTextColor(
  textColorHex1: string,
  textColorHex2: string,
  backgroundColorHex: string
): string {
  const textL1 = calculateLuminance(textColorHex1);
  const textL2 = calculateLuminance(textColorHex2);
  const backgroundL = calculateLuminance(backgroundColorHex);

  // Calculate contrast for text_1
  const contrast1 =
    (Math.max(textL1, backgroundL) + 0.05) /
    (Math.min(textL1, backgroundL) + 0.05);
  // Calculate contrast for text_2
  const contrast2 =
    (Math.max(textL2, backgroundL) + 0.05) /
    (Math.min(textL2, backgroundL) + 0.05);

  return contrast1 > contrast2 ? textColorHex1 : textColorHex2;
}

function calculateLuminance(hexColor: string): number {
  const color_rgb = convert.hex.rgb(hexColor);
  const [R, G, B] = color_rgb.map((x) => {
    const n = x / 255;
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
  return luminance;
}
