import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    'position-logo': 'absolute right-3 top-5',
  },
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        noto: { name: 'Noto Sans SC', weights: [400, 700, 800, 900] }
      }
    })
  ]
})
