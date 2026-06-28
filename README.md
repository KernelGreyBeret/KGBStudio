# KGB Studio

Browser-native arcade development environment for KGB Arcade.

## Domain plan

Use `kgbarcade.dev` for KGB Studio and builder tools.

Keep `kgbarcade.com` player-facing for the arcade.

## Final starter layout

```text
/
  index.html              # current working single-file Studio build until modularized
  manifest.webmanifest    # PWA manifest
  sw.js                   # service worker placeholder

  src/
    core/                 # app state, module registry, project store, asset library
    modules/              # Studio workspaces/tools
      sprite-forge/
      animation-forge/
      shape-forge/
      particle-forge/
      sound-forge/
      tile-forge/
      palette-forge/
      taio/
      asset-slicer/
      gif-forge/
      pwa-tester/
      zip-tool/
    runtime/              # KGB Arcade runtime preview/export code
    ui/                   # shared KGB Studio UI
      css/
      components/
      icons/

  assets/                 # shared static assets, brand assets, templates
  projects/               # example projects and local templates
  docs/                   # roadmap, module contract, project format
  dist/                   # generated release builds
  archive/                # old builds, experiments, retired prototypes
```

## Development approach

Keep `index.html` as the stable working prototype.

As we modularize:

1. Move shell/state code into `src/core/`.
2. Move shared styles and UI pieces into `src/ui/`.
3. Move runtime preview/export logic into `src/runtime/`.
4. Convert each existing standalone tool into a module under `src/modules/`.
5. Generate packaged releases into `dist/`.

## Guiding rule

Every feature should help build KGB Arcade games faster.
