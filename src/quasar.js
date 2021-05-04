import Vue from 'vue'
import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import lang from 'quasar/lang/es.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, QIcon } from 'quasar'

Vue.use(Quasar, {
  components: {
    QIcon
  },
  config: {
    brand: {
      primary: '#0b4ca3',
      secondary: '#ffc107',
      accent: '#9C27B0',
      dark: '#1d1d1d',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#ffffff',
      warning: '#f16522',
      gray_text: '#979797'
    }
  },
  plugins: {
  },
  lang: lang,
  iconSet: iconSet
})