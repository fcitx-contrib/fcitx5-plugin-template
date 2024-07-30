# Fcitx5 plugin template

This is a template repository for developers to create a plugin for [fcitx5-macos](https://github.com/fcitx-contrib/fcitx5-macos).

## Usage
Start by clicking `Use this template` or cloning the repo.

Follow the commands in [ci.yml](.github/workflows/ci.yml) to generate `package/google-doodle.zip`.

Unzip it under `~/.local/share/fcitx5/www/plugin`, so you get `~/.local/share/fcitx5/www/plugin/google-doodle/{dist, package.json}`.

Enable `google-doodle` and `curl` in `Theme Editor` -> `Advanced`.

Now with international network, you should see today's Google Doodle in scroll mode.

## Note
* When developing your own plugin, remember to change the `name` field in [package.json](package.json). It's the unique identifier of your plugin. Don't use organization namespace.

* APIs can be hooked but may break. Check latest [global.d.ts](src/global.d.ts) here.

* Do read platform's [source code](https://github.com/fcitx-contrib/fcitx5-webview) but don't use APIs undocumented here.

* All plugins must have GPLv3 license noted in [package.json](package.json) in order to be loaded. Don't distribute your plugin if you don't want to share source code.
