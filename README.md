# hyper-arc-dark-controls
Pretty window controls from the Arc Dark theme for [hyper](https://github.com/zeit/hyper)

A plugin that makes the close, minimize and maximize buttons look like the Arc Dark window controls. This plugin has been thoroughly tested in Ubuntu and Windows 10, and works with both `v1.4.8` (latest stable) and the `v2.0.0` canary versions.

Originally forked from [@krve](https://github.com/krve)'s [hyper-mac-controls](https://github.com/krve/hyper-mac-controls) and modified by [@moso](https://github.com/moso).

![screenshot](https://dev.moso.io/hyper/hyper-arc-dark-controls/screenshot.png)

### Changelog
**1.1.7**
- Fixed wrong window controls offset on default theme
- Reworked flexbox for better positioning, meaning less `position: absolute`
- Adjusted width and height on both the `<li>`'s and the `svg` icons to match the Arc Dark theme

**1.1.6**
- Fixed hamburgerMenuLeft position issue

**1.1.4, 1.1.5**
- Adjusted the header hight to match the theme
- Applied background color to the header to match the theme color
- Adjusted some values to make the right areas show the background color
- Adjusted the font and font-size of the window title

**1.1.3**
- Applied a small fix to the close button after a hyper update skewered its position.
- Also made the close button smaller to better mimic the original close button.

**1.1.2**
- Small fix to adjust the height and width of the `li` with the maximize and minimize icons, to compensate for the added border.

**1.1.1**
- Small, unmentionable fixes regarding this README.

**1.1.0**
- Converted the originally forked `div` with `span`'s into an `ul` with inline `svg`'s residing inside its `li`'s. This allows for better control over the hover/active functions, and better control over the `fill`-property of the `svg`'s. While using `li`'s we also get past the ugliness of positioning each icon with `position: absolute`, and we now control the space between icons with margin instead. And we now also have the correct hover/active behaviour, since we now have the `background`-property on the `li`'s available aswell.
- The `svg`'s used are taking directly from the [Arc Theme](https://github.com/horst3180/arc-theme) repository. So all credit goes to [horst3180](https://github.com/horst3180). However, I've optimized them quite a bit by removing empty groups and useless InkScape/SodiPodi tags. It might even be worth a PR.
- By inlining the `svg`'s, we can also get rid of the `/icons` folder aswell, as there's now no need for shipping the actual icons.

**1.0.0**
- Initial release

### Install

**Manually**:

1. Open hyper's preferences with `Ctrl+,` (or manually at `~/.hyper.js`) with your editor.
2. Update your list of plugins to include hyper-arc-dark-controls, like so:

        plugins: [
            'hyper-arc-dark-controls'
        ],

3. Reload (`Ctrl+Shift+R`) or restart hyper and voila!

**hpm**:

1. Install using `hpm i hyper-arc-dark-controls`
2. Reload (`Ctrl+Shift+R`) or restart hyper and voila!


### To Do

- Code optimization. Everything works, as of now. But it could be a lot cleaner.
- Create a class for header so it'll be as easy as changing a class inside `index.js` to have the icons positioned on the left side like on OSX.
- Create a check to see if the window is focused, and add a class if not, so the window controls will be "faded" like on real window controls.


### License

MIT
