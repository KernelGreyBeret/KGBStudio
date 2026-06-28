// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "sprite-forge",
//   section: "ASSETS",
//   title: "Sprite Forge",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "sprite-forge",
  section: "ASSETS",
  title: "Sprite Forge",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Sprite Forge</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
