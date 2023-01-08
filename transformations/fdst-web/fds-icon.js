const template = document.createElement('template');
  template.innerHTML = '
    <style>
      :host {
        width: 42px;
        height: 42px;
        --color: #222;
      }
        :host, #root {
          display: inline-block;
        }
          #root, svg {
            width: 100%;
            height: 100%;
          }
            svg, svg * {
              fill: var( --color ) !important;
            }
        .error {
          font-family: sans-serif;
          font-size: 12px;
          color: #f00;
        }
    </style>
    <div id="root"></div>
  ';
  
  class EXIcon extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['icon'];
    }
  
    async getSvg(icon) {
      let svg;
      switch (icon) {
        case 'default' :
          svg = await import('./default.js');
          break;
        case 'github' :
          svg = await import('./github.js');
          break;
      }
  
      if (svg) {
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = svg.default;
      }else{
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = '<div class="error">no icon</div>';
      }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.getSvg(newValue);
      }
    }
  }
  
  window.customElements.define('ex-icon', EXIcon);