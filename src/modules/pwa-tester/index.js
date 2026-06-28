// KGB Studio Module Adapter
//
// Each module should eventually export this shape:
//
// export default {
//   id: "pwa-tester",
//   section: "DEPLOY",
//   title: "Pwa Tester",
//   description: "",
//   render(root, studio) {},
//   actions(root, studio) {},
//   properties(root, studio) {}
// };

export default {
  id: "pwa-tester",
  section: "DEPLOY",
  title: "Pwa Tester",
  description: "Module placeholder.",
  render(root, studio) {
    root.innerHTML = `<div class="card"><h3>Pwa Tester</h3><p>This module is ready to be wired in.</p></div>`;
  }
};
