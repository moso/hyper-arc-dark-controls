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
                right: 94px;
                width: calc(100% - 93px);
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-right: -94px;
            }
            .arc_header {
                position: absolute;
                right: 0;
                top: 7px;
                width: 94px;
            }
            .arc_actions {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            .arc_actions > li {
                display: inline-block;
                margin-right: 16px;
                height: 16px;
                width: 16px;
                border-radius: 50%;
            }
            .arc_actions > li:nth-of-type(2) {
                margin-right: 17px;
            }
            .arc_actions > li:hover {
                transition: all .25s ease;
            }
            .arc_actions > li:last-of-type {
                margin-right: 0;
            }
            .arc_actions > li.arc_close {
                background-color: #cc575d;
            }
            .arc_actions > li.arc_close:hover {
                background-color: #d7787d;
            }
            .arc_actions > li.arc_close:active {
                background-color: #be3841;
            }
            .arc_actions > li > svg {
                width: 16px;
                height: 16px;
            }
            .arc_actions > li.arc_close > svg {
                mix-blend-mode: difference;
            }
            .arc_actions > li:not(.arc_close) {
                width: 18px;
                height: 18px;
                border: 1px solid transparent;
            }
            .arc_actions > li:not(.arc_close):hover {
                background-color: rgba(128,128,128,.25);
                border: 1px solid rgba(0,0,0,1);
            }
            .arc_actions > li:not(.arc_close):hover > svg path,
            .arc_actions > li:not(.arc_close):active > svg path {
                fill: #fff !important;
            }
            .arc_actions > li:not(.arc_close):active {
                background-color: rgba(82,148,226,1);
                border: 1px solid rgba(0,0,0,1);
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
                        React.createElement('ul', { className: 'arc_actions' },
                            React.createElement('li', { onClick: this.minimizeApp },
                                React.createElement('svg', { viewBox: '0 0 16 16' },
                                    React.createElement('g', { id: 'arc_min-button', transform: 'translate(-587,185.63782)' },
                                        React.createElement('g', { id: 'g7138', transform: 'translate(-781, -432.63782)' },
                                            React.createElement('path', { id: 'rect9057-4-3', fill: '#808080', d: 'M1373,254v2h6v-2H1373z' })
                                        ),
                                        React.createElement('rect', { id: 'rect17883-32', x: '587', y: '-185.6', fill: 'none', width: '16', height: '16' })
                                    )
                                )
                            ),
                            React.createElement('li', { onClick: this.maximizeApp },
                                React.createElement('svg', { viewBox: '0 0 16 16' },
                                    React.createElement('g', { id: 'arc_max-button', transform: 'translate(-616,185.63782)' },
                                        React.createElement('g', { id: 'g7146', transform: 'translate(-781,-432.63782)' },
                                            React.createElement('path', { id: 'path4293-5-95', fill: '#808080', d: 'M1403.8,252h3.4 c0.5,0,0.8,0.4,0.8,0.8v3.4L1403.8,252z M1406.2,258h-3.4c-0.5,0-0.8-0.4-0.8-0.8v-3.4L1406.2,258' })
                                        ),
                                        React.createElement('rect', { id: 'rect17883-29', x: '616', y: '-185.6', fill: 'none', width: '16', height: '16' })
                                    )
                                )
                            ),
                            React.createElement('li', { className: 'arc_close', onClick: this.closeApp },
                                React.createElement('svg', { viewBox: '0 0 16 16' },
                                    React.createElement('g', { id: 'arc_close-button', transform: 'translate(-645,185.63782)' },
                                        React.createElement('g', { id: 'g4927-9', transform: 'translate(-678,-432.63782)' },
                                            React.createElement('g', { id: 'g4778-2-68', transform: 'translate(1323,246.86719)' },
                                                React.createElement('g', { id: 'g2996-76-5', transform: 'matrix(0.75,0,0,0.75,2,2.0546875)' },
                                                    React.createElement('g', { id: 'layer12-4-5-7', transform: 'translate(-60,-518)' },
                                                        React.createElement('g', { id: 'layer4-4-1-9-5', transform: 'translate(19,-242)' },
                                                            React.createElement('path', { id: 'path10839-9-2-2', fill: '#808080', d: 'M45,764h1c0,0,0,0,0,0c0.3,0,0.5,0.1,0.7,0.3 l2.3,2.3l2.3-2.3c0.3-0.2,0.4-0.3,0.7-0.3h1v1c0,0.3,0,0.6-0.3,0.8l-2.3,2.3l2.3,2.3c0.2,0.2,0.3,0.5,0.3,0.7v1h-1 c-0.3,0-0.5-0.1-0.7-0.3l-2.3-2.3l-2.3,2.3c-0.2,0.2-0.5,0.3-0.7,0.3h-1v-1c0-0.3,0.1-0.5,0.3-0.7l2.3-2.3l-2.3-2.3 c-0.2-0.2-0.3-0.5-0.3-0.8V764z' })
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement('rect', { id: 'rect17883-39', x: '645', y: '-185.6', fill: 'none', width: '16', height: '16' })
                                    )
                                )
                            )
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
