
type DTTokenBase = {
  $extension?: any,
  $description? : string,
}

export type DTToken =
  DTColorToken |
  DTDimensionToken |
  DTTypographyToken |
  DTFontFamilyToken |
  DTFontWeightToken |
  DTFontStyleToken |
  DTStrokeStyleToken |
  DTBorderToken |
  DTDurationToken |
  DTCubicBezierToken |
  DTShadowToken |
  DTTransitionToken |
  DTGradientToken |
  DTPercentToken |
  DTFileToken;

export enum DTTokenType {
  color = 'color',
  custom = 'custom',
  breakpoint = 'breakpoint',
  dimension = 'dimension',
  spacing = 'spacing',
  typography = 'typography',
  fontFamily = 'fontFamily',
  fontWeight = 'fontWeight',
  fontStyle = 'fontStyle',
  strokeStyle = 'strokeStyle',
  border = 'border', 
  duration = 'duration',
  cubicBezier = 'cubicBezier',
  shadow = 'shadow',
  blur = 'blur',
  transition = 'transition',
  gradient = 'gradient',
  percent = 'percent',
  file = 'file',
  svg = 'svg',
  component = 'component',
}

// Color
export interface DTColorToken extends DTTokenBase {
  '$value' : DTColor,
  '$type' : DTTokenType.color
}

export type DTColor = {
  hex: string,
  alpha: number,
};

// Shadow
export interface DTShadowToken extends DTTokenBase {
  '$value': 
    {
      'color'   : string,
      'alpha'   : number,
      'offsetX' : number,
      'offsetY' : number,
      'radius'  : number,
      'blur'    : number,
      'spread'  : number,
    },
  '$type' : DTTokenType.shadow
}

// Blur
export interface DTBlurToken extends DTTokenBase {
  '$value': 
    {
      'radius'    : number,
    },
  '$type' : DTTokenType.blur
}

// Border
export interface DTBorderToken extends DTTokenBase {
  '$value': 
    {
      'color': string,
      'width': string,
      'style': DTStrokeStyleTokenValues
    }
  '$type' : DTTokenType.border
};

// Stroke Style
export interface DTStrokeStyleToken extends DTTokenBase {
  '$value': DTStrokeStyleTokenValues,
  '$type' : DTTokenType.strokeStyle
}
export type DTStrokeStyleTokenValues = 
  'solid' | 'dashed' | 'dotted' | 'double' |
  'groove' | 'ridge' | 'outset' | 'inset' |
  {
    'dashArray': string[],
    'lineCap': 'round'
  };

// Transition
export interface DTTransitionToken extends DTTokenBase {
  '$value': 
    {
      'duration': string,
      'delay': string,
      'timingFunction': number[]
    },
  '$type' : DTTokenType.transition
}

// Gradient
export interface DTGradientToken extends DTTokenBase {
  '$value': 
    {'color': string, 'postion': number}[],
  '$type' : DTTokenType.gradient
}

// Dimension
export interface DTDimensionToken extends DTTokenBase {
  '$value': string,
  '$type' : DTTokenType.dimension
}

// Spacing
export interface DTSpacingToken extends DTTokenBase {
  '$value': number,
  '$type' : DTTokenType.spacing
}

// Custom
export interface DTCustomToken extends DTTokenBase {
  '$value': string,
  '$type' : DTTokenType.custom
}

// Breakpoint
export interface DTBreakpointToken extends DTTokenBase {
  '$value': number,
  '$direction': 'up' | 'down',
  '$type' : DTTokenType.breakpoint,
}

// Typography
export type FontName = {
  family: string,
  style: string,
};

export type LineHeight = {
  value: number,
  unit: 'PIXELS' | 'PERCENT'
} | { unit: 'AUTO' };

export type LetterSpacing = {
  value: number,
  unit: 'PIXELS' | 'PERCENT',
}

export interface DTTypographyToken extends DTTokenBase {
  '$value': {
    'fontFamily': string,
    'figmaFontObj' : FontName,
    'fontWeight': DTFontWeightTokenValues,
    'fontStyle': string,
    'fontSize': number,
    'letterSpacing': LetterSpacing,
    'lineHeight': LineHeight,
    'listSpacing': number,
    'paragraphIndent': number,
    'paragraphSpacing': number,
    'textCase': 'ORGINAL' | 'UPPER' | 'LOWER' | 'TITLE',
    'textDecoration': 'NONE' | 'UNDERLINE' | 'STRIKETHROUGH',
  },
  '$type' : DTTokenType.typography
}

// Font Family
export interface DTFontFamilyToken extends DTTokenBase {
  '$value': string,
  '$type' : DTTokenType.fontFamily
}

// Font Weight
export type DTFontWeightTokenValues =
  100	| 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

export interface DTFontWeightToken extends DTTokenBase {
  '$value': DTFontWeightTokenValues,
  '$type' : DTTokenType.fontWeight
}

// Font Style
export interface DTFontStyleToken extends DTTokenBase {
  '$value': string,// to do 'normal', etc...
  '$type' : DTTokenType.fontStyle
}

// Cubic Bezier
export interface DTCubicBezierToken extends DTTokenBase {
  '$value': number[],
  '$type' : DTTokenType.cubicBezier
}

// Percent
export interface DTPercentToken extends DTTokenBase {
  '$value': number,
  '$type' : DTTokenType.percent
}

// Duration
export interface DTDurationToken extends DTTokenBase {
  '$value': string,
  '$type' : DTTokenType.duration
}

// File
export interface DTFileToken extends DTTokenBase {
  '$value': {
    url: string,
    mime: string,
  },
  '$type' : DTTokenType.file
}

// Component
export interface DTComponentToken extends DTTokenBase {
  '$value': string,// id of figma component...
  '$type' : DTTokenType.component
}

// Svg
export interface DTSvgToken extends DTTokenBase {
  '$value': {
    svg: string,
    // style: 'regular' | string,
    sizes: number[],
  },
  '$type' : DTTokenType.svg
}

