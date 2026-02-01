export interface KeyDef {
  x: number;
  y: number;
  w: number;
  h: number;
  tap: string;
  hold?: string;
  row: number;
  col: number;
}

export interface KeyboardLayer {
  name: string;
  keys: KeyDef[];
}

export interface KeyboardLayout {
  id: string;
  name: string;
  description: string;
  rows: number;
  cols: number;
  layers: KeyboardLayer[];
  splitGap: number;
}
