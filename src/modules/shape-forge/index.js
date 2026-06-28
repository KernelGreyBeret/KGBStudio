// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "shape-forge",
//   section: "ASSETS",
//   title: "Shape Forge",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "shape-forge",
  section: "ASSETS",
  title: "Shape Forge",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Shape Forge</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
