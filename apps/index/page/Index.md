Index page
==========

The Index page is currently an experimental page in order to get the basic layout right and build a good [component suite](https://github.com/kristianmandrup/marko-semantic-ui-taglibs) for Semantic UI to make it much faster and easier to build basic Data Driven Layouts (DDLs).

The page currently depends on `public/home` where the CSS has several \``.masthead specific classes.

```css
.masthead .ui.menu .ui.button {
  margin-left: 0.5em;
}
```

This is a "no go" for scaling to other apps. Instead it should be based off an identifier, either id or class.

```css
.top-menu .ui.menu .ui.button {
  margin-left: 0.5em;
}
```

Currently the top menu bar is `sticky center aligned`, but I'm not sure it actually works. Needs more investigation in relation to the Semantic UI fixed examples and Sidebar and the rules the govern how to make that work. Please help in that effort!!! Or ask on the Semantic UI gitter forum ;)

Still ways to go, but slowly getting there. We really need a much better component suite for menus, menu items, sidebars etc. for various use cases and scenarios that are battle tested!

Also ways to go with regards to using Stylus for styling, and not our good old tired friend CSS :P

Ideally we would like the Homepage and Page layout in general to look like [this](http://developerkarl.appspot.com/)

A working local copy of this layout can be found in `/examples/developerkarl.appspot.com`. Let's use it as a reference for any Home, Launch or Promotion page :)

Pure Awesome *BLISS!!!*

*Keep on going!! :)*
