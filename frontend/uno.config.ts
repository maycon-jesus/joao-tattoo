// uno.config.ts
import presetWind from '@unocss/preset-wind'
import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetWind(),
        presetAttributify()
    ]
})