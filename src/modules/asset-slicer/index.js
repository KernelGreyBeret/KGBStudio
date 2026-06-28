// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "asset-slicer",
//   section: "ASSETS",
//   title: "Asset Slicer",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "asset-slicer",
  section: "ASSETS",
  title: "Asset Slicer",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Asset Slicer</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
