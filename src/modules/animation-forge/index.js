// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "animation-forge",
//   section: "ASSETS",
//   title: "Animation Forge",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "animation-forge",
  section: "ASSETS",
  title: "Animation Forge",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Animation Forge</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
