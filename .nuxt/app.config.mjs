
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "da75e177-868f-4bee-8002-ae5e2529cb97"
  },
  "_MAPBOX_CONFIG": {
    "accessToken": "pk.eyJ1IjoiaGJ1aHJlciIsImEiOiJjbHgzZmQ5M3gwdmdhMmtvZXBiMGR2bm10In0.8Ekjyl45hjC1Pgu5rk-tEg"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
