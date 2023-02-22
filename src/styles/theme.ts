export const theme = {
  textSizes: {
    s: 1,
    m: 1.2,
    l: 2.5,
  },
  colors: {
    whiteLightBlue: '#f1faee',
    lightBlue: '#a8dadc',
    blue: '#457b9d',
    darkBlue: '#1d3557',
    red: '#e63946',
  },
};

export type Theme = typeof theme;
export type Color = keyof typeof theme.colors;
