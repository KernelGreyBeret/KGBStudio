// KGB Runtime Preview
// Lightweight preview stage for testing sprites, particles, sounds, maps, controls, and exports.

export function createRuntimePreview(canvas, project) {
  const ctx = canvas.getContext("2d");
  return {
    start() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("KGB Runtime Preview", 20, 30);
    }
  };
}
