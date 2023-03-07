
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
<g clip-path="url(#clip0_114_1388)">
<path d="M10.5598 14.64C9.64182 14.64 8.85582 15.288 8.67582 16.182L4.83582 35.382C4.72182 35.946 4.87182 36.528 5.23182 36.978C5.59182 37.428 6.14382 37.68 6.71982 37.68H22.0798V41.52H18.2398C17.1778 41.52 16.3198 42.378 16.3198 43.44C16.3198 44.502 17.1778 45.36 18.2398 45.36H29.7598C30.8218 45.36 31.6798 44.502 31.6798 43.44C31.6798 42.378 30.8218 41.52 29.7598 41.52H25.9198V37.68H41.2798C41.8558 37.68 42.4018 37.422 42.7618 36.978C43.1218 36.534 43.2718 35.946 43.1578 35.382L39.3178 16.182C39.1438 15.288 38.3578 14.64 37.4398 14.64H10.5598ZM10.8838 24.72L12.1318 18.48H17.5558L16.9378 24.72H10.8838ZM10.3078 27.6H16.6498L16.0258 33.84H9.05982L10.3078 27.6ZM19.5418 27.6H28.4578L29.0818 33.84H18.9178L19.5418 27.6ZM31.3498 27.6H37.6918L38.9398 33.84H31.9798L31.3498 27.6ZM37.1098 24.72H31.0618L30.4378 18.48H35.8618L37.1098 24.72ZM28.1638 24.72H19.8238L20.4538 18.48H27.5458L28.1698 24.72H28.1638Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_114_1388">
<rect width="38.4" height="30.72" fill="white" transform="translate(4.80005 14.64)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class solarPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('solar-panel', solarPanel);