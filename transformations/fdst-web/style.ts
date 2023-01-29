/* eslint-disable */
import { FDSProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * style
 * Function for dynamically creating and auto-completing
 * FDS design system atoms.
 * @param {DSysProp} dsysStyles
 * @param {CSS.Properties} otherStyles
 * @return {string}
 */
export default function style(
  dsysStyles: FDSProp,
  otherStyles: CSS.Properties = {},
) : string {
  const toKebab =
    (str) => str.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
  return `style="${
    Object.entries(dsysStyles).map((entry) => {
      const name = toKebab(entry[0]);
      const value = entry[1];
      if (value === true) {
        return `--fds-${name}: 1;`;
      }else if (!isNaN(value as any)) {
        return `--fds-${name}: ${value};`;
      }else{
        return `--fds-${name}: var( --fds-${value} );`;
      }
    }).join('\n  ')}${
    Object.entries(otherStyles).map((entry) => {
      if (!entry[0]) return '';
      const name = toKebab(entry[0]);
      return `${name}: ${entry[1]};`;
    }).join('\n  ')
  }"`;
}
