import { Theme } from "../types/types";

export const themes: Record<string, Theme> = {
  default: {
    color: {
      text: 'hsl(200, 15%, 8%)',
      background: 'hsl(0, 0%, 98%)',
      elements: 'hsl(0, 0%, 100%)',
      input: 'hsl(0, 0%, 52%)',
    }
  },
  dark: {
    color: {
      text: 'hsl(0, 0%, 100%)',
      background: 'hsl(207, 26%, 17%)',
      elements: 'hsl(209, 23%, 22%)',
    }
  }
}