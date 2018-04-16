'use strict'

const isWin = process.platform === 'win32';
let dirname = __dirname;
const remote = require('electron').remote;

// Windows needs a regex because reasons
if (isWin == true) {
    dirname = dirname.replace(/\\/g, '/');
}

exports.decorateConfig = (config) => {
    const controlLeft = config.showWindowControls;

    const arcDarkConfig = {
        height: '26px',
        headerBg: '#2f343f',
        marginWidth: '88px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        iconSize: '16px',
        closeBg: '#cc575d',
        closeBgHover: '#d7787d',
        closeBgActive: '#be3841',
        blueColor: 'rgba(82,148,226,1)',
        borderColor: '#000'
    }

    if(controlLeft == 'left') {
        return Object.assign({}, config, {
            css: `
                ${config.css || ''}
                .hyper_main {
                    border: 1px solid ${arcDarkConfig.borderColor} !important;
                }
                .header_header {
                    display: flex;
                    flex-direction: row-reverse;
                    top: 1px !important;
                    left: 1px !important;
                    right: 1px !important;
                }
                .header_windowHeader {
                    width: calc(100% - ${arcDarkConfig.marginWidth});
                    height: ${arcDarkConfig.height};
                    margin-left: calc(${arcDarkConfig.marginWidth} - 2px);
                    background-color: ${arcDarkConfig.headerBg};
                    border: 0 !important;
                }
                .header_windowHeader .header_hamburgerMenuLeft,
                .header_windowHeader .header_hamburgerMenuRight {
                    width: 40px;
                    height: ${arcDarkConfig.height};
                    padding: 0 15px;
                }
                .tabs_nav {
                    width: 100%;
                    top: ${arcDarkConfig.height};
                }
                .header_windowControls {
                    display: none;
                }
                .header_appTitle {
                    margin-left: -${arcDarkConfig.marginWidth};
                    font-family: ${arcDarkConfig.fontFamily};
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                }
                .arc_header {
                    position: absolute;
                    right: auto !important;
                    left: 0 !important;
                    width: ${arcDarkConfig.marginWidth};
                    height: ${arcDarkConfig.height};
                    padding-right: 0 !important;
                    padding-left: 8px !important;
                    background-color: ${arcDarkConfig.headerBg};
                }
                .arc_actions {
                    display: flex;
                    flex-direction: row-reverse !important;
                    align-items: center;
                    justify-content: space-between;
                    height: ${arcDarkConfig.height};
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                .arc_actions > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .arc_actions > li.arc_close {
                    background-color: ${arcDarkConfig.closeBg};
                    width: calc(${arcDarkConfig.iconSize} - 2px);
                    height: calc(${arcDarkConfig.iconSize} - 2px);
                }
                .arc_actions > li.arc_close:hover {
                    background-color: ${arcDarkConfig.closeBgHover};
                }
                .arc_actions > li.arc_close:active {
                    background-color: ${arcDarkConfig.closeBgActive};
                }
                .arc_actions > li > svg {
                    width: ${arcDarkConfig.iconSize};
                    height: ${arcDarkConfig.iconSize};
                }
                .arc_actions > li.arc_close > svg {
                    position: absolute;
                    width: ${arcDarkConfig.iconSize};
                    height: ${arcDarkConfig.iconSize};
                    mix-blend-mode: difference;
                }
                .arc_actions > li:not(.arc_close) {
                    width: calc(${arcDarkConfig.iconSize} + 2px);
                    height: calc(${arcDarkConfig.iconSize} + 2px);
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
                    background-color: ${arcDarkConfig.blueColor};
                    border: 1px solid rgba(0,0,0,1);
                }
            `
        })
    }

    if(controlLeft == false) {
        return Object.assign({}, config, {
            css: `
                ${config.css || ''}
                .hyper_main {
                    border: 1px solid ${arcDarkConfig.borderColor} !important;
                }
                .header_header {
                    display: flex;
                    top: 1px !important;
                    left: 1px !important;
                    right: 1px !important;
                }
                .header_windowHeader {
                    width: 100%;
                    height: ${arcDarkConfig.height};
                    background-color: ${arcDarkConfig.headerBG};
                    border: 0 !important;
                }
                .header_windowHeader .header_hamburgerMenuLeft,
                .header_windowHeader .header_hamburgerMenuRight {
                    width: 40px;
                    height: ${arcDarkConfig.height};
                    padding: 0 15px;
                }
                .tabs_nav {
                    width: 100%;
                    top: ${arcDarkConfig.height};
                }
                .header_windowControls {
                    display: none;
                }
                .header_appTitle {
                    font-family: ${arcDarkConfig.fontFamily};
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;.header_windowHeader .header_hamburgerMenuLeft,
                }
                .arc_header {
                    position: absolute;
                    top: -1000%;
                    display: none;
                    visibility: hidden;
                    opacity: 0;
                }
            `
        })
    }

    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .hyper_main {
                border: 1px solid ${arcDarkConfig.borderColor} !important;
            }
            .header_header {
                display: flex;
                top: 1px !important;
                left: 1px !important;
                right: 1px !important;
            }
            .header_windowHeader {
                width: calc(100% - ${arcDarkConfig.marginWidth});
                height: ${arcDarkConfig.height};
                background-color: ${arcDarkConfig.headerBg};
                border: 0 !important;
            }
            .header_windowHeader .header_hamburgerMenuLeft,
            .header_windowHeader .header_hamburgerMenuRight {
                width: 40px;
                height: ${arcDarkConfig.height};
                padding: 0 15px;
            }
            .tabs_nav {
                width: 100%;
                top: ${arcDarkConfig.height};
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-left: ${arcDarkConfig.marginWidth};
                font-family: ${arcDarkConfig.fontFamily};
                font-size: 14px;
                font-weight: 700;
                color: #fff;
            }
            .arc_header {
                position: absolute;
                right: 0;
                width: ${arcDarkConfig.marginWidth};
                height: ${arcDarkConfig.height};
                padding-right: 8px !important;
                background-color: ${arcDarkConfig.headerBg};
            }
            .arc_actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: ${arcDarkConfig.height};
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            .arc_actions > li {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
            .arc_actions > li.arc_close {
                background-color: ${arcDarkConfig.closeBg};
                width: calc(${arcDarkConfig.iconSize} - 2px);
                height: calc(${arcDarkConfig.iconSize} - 2px);
            }
            .arc_actions > li.arc_close:hover {
                background-color: ${arcDarkConfig.closeBgHover};
            }
            .arc_actions > li.arc_close:active {
                background-color: ${arcDarkConfig.closeBgActive};
            }
            .arc_actions > li > svg {
                width: ${arcDarkConfig.iconSize};
                height: ${arcDarkConfig.iconSize};
            }
            .arc_actions > li.arc_close > svg {
                position: absolute;
                width: ${arcDarkConfig.iconSize};
                height: ${arcDarkConfig.iconSize};
                mix-blend-mode: difference;
            }
            .arc_actions > li:not(.arc_close) {
                width: calc(${arcDarkConfig.iconSize} + 2px);
                height: calc(${arcDarkConfig.iconSize} + 2px);
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
                background-color: ${arcDarkConfig.blueColor};
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
