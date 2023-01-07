/* eslint-disable */
import { FDSProp } from "./css-atoms.d.ts";
import type * as CSS from 'csstype';

/**
 * FDS
 * Function for dynamically creating and auto-completing
 * FDS design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export function FDS(
  dsysStyles: FDSProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--FDS-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--FDS-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--FDS-${entry[0]}`] = `var( --ex-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
