
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
<path d="M29.8162 5.30679C29.5494 5.32973 29.2883 5.39808 29.0445 5.50891L7.87648 14.9169C7.46071 15.1018 7.10748 15.4033 6.85961 15.7849C6.61174 16.1665 6.47987 16.6118 6.47998 17.0668V42.9388C6.47987 43.3939 6.61174 43.8391 6.85961 44.2207C7.10748 44.6023 7.4607 44.9038 7.87648 45.0887L29.0445 54.4967C29.3453 54.6304 29.6708 54.6995 30 54.6995C30.3292 54.6995 30.6547 54.6304 30.9555 54.4967L52.1235 45.0887C52.5393 44.9038 52.8925 44.6023 53.1404 44.2207C53.3882 43.8391 53.5201 43.3939 53.52 42.9388V17.0668C53.5201 16.6118 53.3882 16.1665 53.1404 15.7849C52.8925 15.4033 52.5393 15.1018 52.1235 14.9169L30.9555 5.50891C30.5985 5.34773 30.2069 5.27826 29.8162 5.30679ZM30 10.2313L45.3798 17.0668L30 23.9023L14.6201 17.0668L30 10.2313ZM11.184 20.6867L27.648 27.9999V48.727L11.184 41.4137V20.6867V20.6867ZM48.816 20.6867V41.4137L32.352 48.727V27.9999L48.816 20.6867V20.6867Z" fill="#353739"/>
</svg>
</div>
`;

class cube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('cube', cube);