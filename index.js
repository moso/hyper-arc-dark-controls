'use strict'

const isWin = process.platform === 'win32';
let dirname = __dirname;
const remote = require('electron').remote;

// Windows needs a regex because reasons
if (isWin == true) {
    dirname = dirname.replace(/\\/g, '/');
}

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .header_windowHeader {
                right: 85px;
                width: calc(100% - 84px);
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-right: -85px;
            }
            .arc_header {
                position: fixed;
                top: 0;
                right: 0;
                height: 34px;
                width: 85px;
            }
            .arc_actions {
                position: absolute;
                left: 0;
                right: 7px;
                bottom: 0;
                top: 7px;
            }
            .arc_header .arc_close,
            .arc_header .arc_minimize,
            .arc_header .arc_maximize {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                position: absolute;
                top: 7px;
                background-position: center;
            }
            .arc_header .arc_close {
                background-color: #cc575d;
                background-image: url('${dirname}/icons/close-icon.svg');
                right: 5px;
                transition: background-color .2s ease;
            }
            .arc_header .arc_close:hover {
                background-color: #d7787d;
            }
            .arc_header .arc_maximize {
                background-image: url('${dirname}/icons/max-icon.svg');
                right: 36px;
                transition: background-image .2s ease;
            }
            .arc_header .arc_maximize:hover {
                background-image: url('${dirname}/icons/max-icon-hover.svg');
            }
            .arc_header .arc_minimize {
                background-image: url('${dirname}/icons/min-icon.svg');
                right: 66px;
                transition: background-image .2s ease;
            }
            .arc_header .arc_minimize:hover {
                background-image: url('${dirname}/icons/min-icon-hover.svg');
            }
        `
    })
};

exports.decorateHeader = (Hyper, { React }) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                window: null,
                maximized: false
            }
            this.closeApp = this.closeApp.bind(this);
            this.minimizeApp = this.minimizeApp.bind(this);
            this.maximizeApp = this.maximizeApp.bind(this);
        }
        closeApp() {
            this.state.window.close();
        }
        minimizeApp() {
            this.state.window.minimize();
            this.state.maximized = false;
        }
        maximizeApp() {
            if (this.state.maximized == true) {
                this.state.window.unmaximize();
                this.state.maximized = false;
            } else {
                this.state.window.maximize();
                this.state.maximized = true;
            }
        }
        render() {
            return (
                React.createElement(Hyper, Object.assign({}, this.props, {
                    customChildren: React.createElement('div', { className: 'arc_header' },
                        React.createElement('div', { className: 'arc_actions' },
                            React.createElement('span', { className: 'arc_minimize', onClick: this.minimizeApp }),
                            React.createElement('span', { className: 'arc_maximize', onClick: this.maximizeApp }),
                            React.createElement('span', { className: 'arc_close', onClick: this.closeApp })
                        )
                    )
                }))
            )
        }
        componentDidMount() {
            this.state.window = remote.getCurrentWindow();
        }
    };
};
