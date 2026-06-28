// KGB Studio Project Store
// Future save/load/export helpers for .kgbproject.json files.

export function createProject(name = "Untitled KGB Game") {
  const now = new Date().toISOString();
  return {
    meta: {
      name,
      created: now,
      updated: now,
      studioVersion: "0.2"
    },
    mission: {
      note: ""
    },
    assets: {
      sprites: [],
      animations: [],
      shapes: [],
      particles: [],
      sounds: [],
      tiles: [],
      palettes: [],
      maps: []
    },
    settings: {
      theme: "kgb-neon",
      target: "web-pwa"
    }
  };
}
