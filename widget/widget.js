class HelloWorldWidget {
    constructor({ container }) {
        this.baseClassName = 'hello-world-widget'

        this.container = container;
        this.shadowRoot = container.attachShadow({ mode: 'open' });

        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'https://demolution.fra1.digitaloceanspaces.com/other/hello-world-widget/widget.css';
        this.shadowRoot.appendChild(styleLink);

        this.innerContainer = document.createElement('div');
        this.innerContainer.classList.add(this.baseClassName);
        this.shadowRoot.appendChild(this.innerContainer);

        this._renderContent();
    }

    _renderContent() {
        this.title = document.createElement('h1');
        this.title.classList.add(`${this.baseClassName}__title`);
        this.title.innerText='17’5 4 7R4P'
        this.innerContainer.appendChild(this.title);
    }

    destroy() {
        this.container.innerHTML = '';
        this.shadowRoot.innerHTML = '';
        this.container.classList.remove(this.baseClassName);
        this.container.detachShadow();
    }
}

window.init = (config) => {
    window.widget = new HelloWorldWidget(config);
};
