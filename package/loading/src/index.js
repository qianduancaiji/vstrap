


export default (function() {

    let defaultConf = {
        boxMinHeight: '169px',
        loadingIconClass: 'iconfont icon-icon_loading_large',
        loadingText: '',
        background: ''
    }

    let Loading = function(el, opitions) {
        this.opitions = Object.assign(defaultConf, opitions ? opitions : {});
        this.element = el;
        this.loadingBox = null;
        this.init();
    }

    Loading.prototype = {
        constructor: Loading,
        init() {
            let el = this.element;
            let opitions = this.opitions;
            el.style.position = 'relative';
            el.style.minHeight = opitions.boxMinHeight;
            this.createLoadingBox();
            this.createLoadingContent();
            el.appendChild(this.loadingBox);
            return this;
        },
        createLoadingBox() {
            let loadingBox = document.createElement('div');
            loadingBox.style.cssText = `
                min-height: ${this.opitions.boxMinHeight};
                background-color: ${this.opitions.background}
            `;
            loadingBox.className = 'vs-loading-box vs-modal-loading';
            this.loadingBox = loadingBox;
            return this;
        },
        createLoadingContent() {
            let opitions = this.opitions;
            this.loadingBox.innerHTML = `
                <div class="vs-loading-content">
                    <i class="${opitions.loadingIconClass} vs-icon-loading"></i>
                    <p class="vs-loading-text">${opitions.loadingText}</p>
                </div>
            `;
            return this;
        },
        open() {
            let loadingBox = this.loadingBox;
            if (loadingBox !== null) {
                loadingBox.style.display = 'block';
            } else {
                this.init();
            }
            return this;
        },
        close() {
            let loadingBox = this.loadingBox;
            if (loadingBox !== null) {
                loadingBox.style.display = 'none';
                loadingBox.style.minHeight = 'auto';
            }
            return this;
        },
        destroy() {
            try {
                this.element.removeChild(this.loadingBox);
            } catch (error) {
                
            }
        }
    }
    return Loading;
})()


