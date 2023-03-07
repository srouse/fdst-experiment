
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      width: 42px;
      height: 42px;
    }
      :host, #root {
        display: inline-block;
      }
        #root, svg {
          width: 100%;
          height: 100%;
        }
          svg, svg * {
            fill: var( --color, #222 ) !important;
          }
      .error {
        font-family: sans-serif;
        font-size: 12px;
        color: #f00;
      }
  </style>
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_20739)">
<path d="M17.0002 19.5756C17.0002 15.2856 20.4858 11.8 24.7758 11.8C28.7002 11.8 32.0071 14.725 32.4946 18.6169L32.5758 19.2831C32.7546 20.705 31.7471 22.005 30.3171 22.1838C28.8871 22.3625 27.5952 21.355 27.4165 19.925L27.3352 19.2588C27.1727 17.9669 26.0758 17 24.7758 17C23.354 17 22.2002 18.1538 22.2002 19.5756V27.4H37.8002V19.5756C37.8002 15.2856 41.2858 11.8 45.5758 11.8C49.5002 11.8 52.8071 14.725 53.2946 18.6169L53.3758 19.2831C53.5546 20.705 52.5471 22.005 51.1171 22.1838C49.6871 22.3625 48.3952 21.355 48.2165 19.925L48.1352 19.2588C47.9727 17.9669 46.8758 17 45.5758 17C44.154 17 43.0002 18.1538 43.0002 19.5756V38.5313C42.8702 38.6125 42.7321 38.6938 42.6102 38.7832C41.1477 39.7907 39.3521 40.4325 37.8002 40.4325V32.6H22.2002V40.4407C20.6565 40.4407 18.8527 39.7988 17.3983 38.7913C17.2683 38.7019 17.1383 38.6125 17.0002 38.5394V19.5756ZM31.5033 40.8794C33.3315 42.1388 35.5658 43 37.8002 43C39.9858 43 42.3015 42.1225 44.089 40.8794C45.0558 40.1888 46.3721 40.2457 47.274 41.0175C48.444 41.9844 49.9146 42.7238 51.3852 43.065C52.7827 43.39 53.6521 44.7875 53.3271 46.185C53.0021 47.5825 51.6046 48.4519 50.2071 48.1269C48.2165 47.6638 46.559 46.7863 45.4783 46.0957C43.1221 47.3632 40.4815 48.2 37.8002 48.2C35.2083 48.2 32.8765 47.3957 31.2677 46.6644C30.7965 46.445 30.3658 46.2338 30.0002 46.0388C29.6346 46.2338 29.2121 46.4532 28.7327 46.6644C27.124 47.3957 24.7921 48.2 22.2002 48.2C19.519 48.2 16.8783 47.3632 14.5221 46.1038C13.4333 46.7863 11.784 47.6719 9.79333 48.135C8.39583 48.46 6.99833 47.5907 6.67333 46.1932C6.34833 44.7957 7.21771 43.3982 8.61521 43.0732C10.0858 42.7319 11.5565 41.9925 12.7265 41.0257C13.6283 40.2619 14.9446 40.205 15.9115 40.8875C17.7071 42.1225 20.0146 43 22.2002 43C24.4346 43 26.669 42.1388 28.4971 40.8794C29.399 40.2375 30.6015 40.2375 31.5033 40.8794Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_15_20739">
<rect width="46.8" height="41.6" fill="white" transform="translate(6.6001 9.20001)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class FDSwaterLadder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('fds-water-ladder', FDSwaterLadder);