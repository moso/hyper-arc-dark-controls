# hyper-arc-dark-controls
Pretty window controls from the Arc Dark theme for [hyper](https://github.com/zeit/hyper)

A plugin that makes the close, minimize and maximize buttons look like the Arc Dark window controls. This plugin is tested in both linux and windows.

Originally forked from [@krve](https://github.com/krve)'s [hyper-mac-controls](https://github.com/krve/hyper-mac-controls) and modified by [@moso](https://github.com/moso).

![screenshot](https://dev.moso.io/hyper/hyper-arc-dark-controls/screenshot.png)

### Install

**Manually**:

1. Open hyper's preferences with `Cmd+,` (or manually at `~/.hyperterm.js`) with your editor.
2. Update your list of plugins to include hyper-arc-dark-controls, like so:

        plugins: [
            'hyper-arc-dark-controls'
        ],

3. Reload (`Cmd+Shift+R`) or restart hyper and voila!

**hpm**:

1. Install using `hpm i hyper-arc-dark-controls`
2. Reload (`Cmd+Shift+R`) or restart hyper and voila!


### To Do

- Convert the originally forked `<div>` with `<span>`'s inside it into a `<ul>` where the icons will reside as raw SVG inside `<li>`'s. This will allow better control with padding between `<li>`'s instead of positioning, aswell as the ability to have the correct hover background on the minimize and maximize icons. This will also give me the ability to adjust the color of the SVG with `fill` instead of having a colored SVG, which will give the plugin better compatibility.
- While at it, create the `<ul>` so it'll be as easy as changing a class inside `index.js` to have the icons positioned on the left side like on OSX.


### License

MIT
