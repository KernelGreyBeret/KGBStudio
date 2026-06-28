// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "taio",
//   section: "SYSTEMS",
//   title: "Taio",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "taio",
  section: "SYSTEMS",
  title: "Taio",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Taio</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
