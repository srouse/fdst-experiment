/* eslint-disable */
import { FDSProp } from "./css-atoms.d.ts";
import type * as CSS from 'csstype';

/**
 * style
 * Function for dynamically creating and auto-completing
 * FDS design system files.
 * @param {DSysProp} dsysStyles
 * @param {CSS.Properties} otherStyles
 * @return {string}
 */
export function style(
  dsysStyles: FDSProp,
  otherStyles: CSS.Properties = {},
) : string {
  return `style="${
    Object.entries(dsysStyles).map((entry) => {
      if (entry[1] === true) {
        return `--FDS-${entry[0]}: 1;`;
      }else{
        return `--FDS-${entry[0]}: var( --FDS-${entry[1]} );`;
      }
    }).join('\n  ')}${
    Object.entries(otherStyles).map((entry) => {
      return `${entry[0]}: ${entry[1]};`;
    }).join('\n  ')
  }"`;
}
