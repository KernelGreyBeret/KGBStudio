# KGB Studio Module Contract

Every module should eventually export:

```js
export default {
  id: "sprite-forge",
  section: "ASSETS",
  title: "Sprite Forge",
  description: "Canvas sprite creation workspace.",
  render(root, studio) {},
  actions(root, studio) {},
  properties(root, studio) {}
};
```

## Sections

- MISSION
- ASSETS
- SYSTEMS
- BUILD
- DEPLOY
