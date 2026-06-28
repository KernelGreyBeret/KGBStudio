// KGB Studio Module Registry
// Future loader for all KGB Studio modules.

export const ModuleRegistry = new Map();

export function registerModule(moduleDef) {
  ModuleRegistry.set(moduleDef.id, moduleDef);
  return moduleDef;
}

export function getModule(id) {
  return ModuleRegistry.get(id);
}
