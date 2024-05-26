// uno.config.ts
import presetWind from '@unocss/preset-wind'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetWind(),
        presetAttributify()
    ],
    transformers: [
        transformerVariantGroup()
    ]
})