import h from 'virtual-dom/h'

import * as actions from './actions'

actions.list()

export default function Gallery() {
  return h('div.leGallery', 'Le Gallery')
}
