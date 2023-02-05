import {
  DTBlurToken,
  DTBorderToken,
  DTBreakpointToken,
  DTColorToken,
  DTComponentToken,
  DTCubicBezierToken,
  DTCustomToken,
  DTDimensionToken,
  DTDurationToken,
  DTFileToken,
  DTFontFamilyToken,
  DTFontStyleToken,
  DTFontWeightToken,
  DTGradientToken,
  DTPercentToken,
  DTShadowToken,
  DTSpacingToken,
  DTStrokeStyleToken,
  DTSvgToken,
  DTTransitionToken,
  DTTypographyToken
} from "./designTokenTypes";

// ROOT OBJECT
export interface DSys {
  [key: string] : DSysSheet | string
  $description: string,
};

export interface DSysSheet {
  $extensions: DSysSheetExtensions,
  $description?: string,
  [DSysSheetGroupNames.color]?: DSysColorGroup,
  [DSysSheetGroupNames.type]?: DSysTypographyGroup,
  [DSysSheetGroupNames.effect]?: DSysEffectGroup,
  [DSysSheetGroupNames.icons]?: DSysIconGroup,
  [DSysSheetGroupNames.component]?: DSysComponentsGroup,
  [DSysSheetGroupNames.custom]?: DSysCustomGroup,
  [DSysSheetGroupNames.breakpoint]?: DSysBreakpointGroup,
  [DSysSheetGroupNames.spacing]?: DSysSpacingGroup,
  [DSysSheetGroupNames.undetermined]?: DSysUndeterminedGroup,
};

export enum DSysLevel {
  sheet =     'sheet',
  group =     'group',
  tokenset =  'tokenset',
  token =     'token'
}

// DSYS SHEET
interface DSysSheetExtensions {
  'dsys.level'    : DSysLevel.sheet,
  'dsys.prefix'   : string,
  'dsys.fullName' : string,
  'dsys.baseId'   : string,
}

export enum DSysSheetGroupNames {
  color           = 'color',
  type            = 'type',
  effect          = 'effect',
  icons           = 'icon',
  component       = 'component',
  custom          = 'custom',
  breakpoint      = 'breakpoint',
  spacing         = 'spacing',
  undetermined    = 'undetermined',
}

// ALL THE GROUPS
export enum DSysGroupType {
  Base = 'Base',
  BreakpointSet = 'BreakpointSet',
  ColorSet = 'ColorSet',
  ComponentSet = 'ComponentSet',
  CustomSet = 'CustomSet',
  EffectSet = 'EffectSet',
  IconSet = 'IconSet',
  Spacing = 'Spacing',
  TypographySet = 'TypographySet',
  Undetermined = 'Undetermined'
}

export type DSysColorGroup = DSysGroup<
  DSysGroupType.ColorSet,
  DSysColorTokenset
>;

export type DSysTypographyGroup = DSysGroup<
  DSysGroupType.TypographySet,
  DSysTypographyTokenset
>;

export type DSysEffectGroup = DSysGroup<
  DSysGroupType.EffectSet,
  DSysEffectTokenset
>;

export type DSysIconGroup = DSysGroup<
  DSysGroupType.IconSet,
  DSysIconTokenset 
>;

export type DSysComponentsGroup = DSysGroup<// todo
  DSysGroupType.ComponentSet,
  DSysComponentsTokenset
>;

export type DSysSpacingGroup = DSysGroup<
  DSysGroupType.Spacing,
  DSysSpacingTokenset
>;

export type DSysCustomGroup = DSysGroup<
  DSysGroupType.CustomSet,
  DSysCustomTokenset
>;

export type DSysBreakpointGroup = DSysGroup<
  DSysGroupType.BreakpointSet,
  DSysBreakpointTokenset
>;

export type DSysUndeterminedGroup = DSysGroup<
  DSysGroupType.Undetermined,
  DSysUndeterminedTokenset
>;

// ---------- GROUP -----------------------
interface DSysGroupExtensions<GroupType> {
  'dsys.level'  : DSysLevel.group,
  'dsys.type'   : GroupType,
  'dsys.nodeIds' : string[],
}
export interface DSysGroup<GroupType, Tokenset> {
  [key: string] : 
    string | undefined |
    DSysGroupExtensions<GroupType> | 
    Tokenset,
  $extensions: DSysGroupExtensions<GroupType>,
  $description?: string,
}


// ============= VALUE SETS ======================
export type DSysTokenset = 
  DSysColorTokenset |
  DSysCustomTokenset |
  DSysBreakpointTokenset |
  DSysTypographyTokenset |
  DSysEffectTokenset |
  DSysIconTokenset |
  DSysComponentsTokenset |
  DSysSpacingTokenset |
  DSysUndeterminedTokenset;

export type DSysColorTokenset = DSysTokensetBase<
  DSysGroupType.ColorSet,
  DSysColorToken
>;

export type DSysTypographyTokenset = DSysTokensetBase<
  DSysGroupType.TypographySet,
  DSysFontFamilyToken |
  DSysFontWeightToken |
  DSysTypographyToken |
  DSysFontStyleToken
>;

export type DSysEffectTokenset = DSysTokensetBase<
  DSysGroupType.EffectSet,
  DSysShadowToken |
  DSysBlurToken
>;

export type DSysIconTokenset = DSysTokensetBase<
  DSysGroupType.IconSet,
  DSysSvgToken 
>;

export type DSysCustomTokenset = DSysTokensetBase<
  DSysGroupType.CustomSet,
  DSysCustomToken 
>;

export type DSysBreakpointTokenset = DSysTokensetBase<
  DSysGroupType.BreakpointSet,
  DSysBreakpointToken 
>;

export type DSysComponentsTokenset = DSysTokensetBase<
  DSysGroupType.ComponentSet,
  DSysComponentToken
>;

export type DSysSpacingTokenset = DSysTokensetBase<
  DSysGroupType.Spacing,
  DSysSpacingToken
>;

export type DSysUndeterminedTokenset = DSysTokensetBase<
  DSysGroupType.Undetermined,
  DSysDimensionToken
>;


// -------- TOKENSET -------
interface DSysTokensetBaseExtensions<GroupType> {
  'dsys.level'  : DSysLevel.tokenset,
  'dsys.type'   : GroupType,
  'dsys.name'   : string,
  'dsys.nodeId' : string,// there is only one...
}
export interface DSysTokensetBase<GroupType, TokenType> {
  [key: string] : 
    string | undefined |
    DSysTokensetBaseExtensions<GroupType> | 
    TokenType
  $extensions: DSysTokensetBaseExtensions<GroupType>,
  $description?: string,
}

// ================================================


// GENERIC TOKENS TO DSYS TOKENS
export type DSysToken = 
  DSysColorToken |
  DSysCustomToken |
  DSysBreakpointToken |
  DSysDimensionToken |
  DSysTypographyToken |
  DSysFontFamilyToken |
  DSysFontWeightToken |
  DSysFontStyleToken |
  DSysStrokeStyleToken |
  DSysBorderToken |
  DSysDurationToken |
  DSysCubicBezierToken |
  DSysShadowToken |
  DSysBlurToken |
  DSysTransitionToken |
  DSysGradientToken |
  DSysPercentToken |
  DSysFileToken |
  DSysSvgToken |
  DSysComponentToken |
  DSysSpacingToken;

export interface DSysColorToken extends DTColorToken {
  $extensions : {
    'dsys.level'    : DSysLevel.token,
    'dsys.name'     : string,
    'dsys.index'    : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysCustomToken extends DTCustomToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.uid'  : string,
  },
}
export interface DSysBreakpointToken extends DTBreakpointToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.uid'  : string,
  },
}
export interface DSysDimensionToken extends DTDimensionToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.uid'  : string,
  },
}
export interface DSysTypographyToken extends DTTypographyToken {
  $extensions : {
    'dsys.level'    : DSysLevel.token,
    'dsys.name'     : string,
    'dsys.index'    : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysFontFamilyToken extends DTFontFamilyToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysFontWeightToken extends DTFontWeightToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysFontStyleToken extends DTFontStyleToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysStrokeStyleToken extends DTStrokeStyleToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysBorderToken extends DTBorderToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysDurationToken extends DTDurationToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysCubicBezierToken extends DTCubicBezierToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysShadowToken extends DTShadowToken {
  $extensions : {
    'dsys.level'    : DSysLevel.token,
    'dsys.name'     : string,
    'dsys.index'    : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysBlurToken extends DTBlurToken {
  $extensions : {
    'dsys.level'    : DSysLevel.token,
    'dsys.name'     : string,
    'dsys.index'    : number,
    'dsys.styleId'  : string,
  },
}
export interface DSysTransitionToken extends DTTransitionToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysGradientToken extends DTGradientToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysPercentToken extends DTPercentToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}
export interface DSysFileToken extends DTFileToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}

export interface DSysComponentToken extends DTComponentToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
  },
}

export interface DSysSvgToken extends DTSvgToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.componentId' : string,
    'dsys.scale' : number,
    'dsys.offsetX' : number,
    'dsys.offsetY' : number,
    'dsys.sizes' : number[],
    'dsys.index' : number,
  },
}

export interface DSysSpacingToken extends DTSpacingToken {
  $extensions : {
    'dsys.level' : DSysLevel.token,
    'dsys.name'  : string,
    'dsys.index' : number,
    'dsys.uid'  : string,
  },
}

