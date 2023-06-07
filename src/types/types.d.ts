export interface Native {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface Country {
  name: {
    common: string
    nativeName: NativeName;
  }
  flags: {
    png: string
  }
  population: number
  region: string
  capital: string
  subregion?: string
  tld?:string
  currencies?: Array
  languages?: Array
  borders?:Array
  nativeName?: Native
}

export interface Theme {
  color: {
    text: string;
    background: string;
    elements: string;
    input?: string;
  };
}

export type ThemeKey = "default" | "dark";
