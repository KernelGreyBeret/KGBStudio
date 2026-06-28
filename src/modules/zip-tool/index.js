// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "zip-tool",
//   section: "BUILD",
//   title: "Zip Tool",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "zip-tool",
  section: "BUILD",
  title: "Zip Tool",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Zip Tool</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
