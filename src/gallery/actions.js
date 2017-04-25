import * as api from './api'
import types from '../common/types'

const TYPES = types('gallery', 'LIST_SUCCESS')

export async function list() {
  const paintings = await api.list()
  console.log('paintings', paintings)
  return {
    type: TYPES.LIST_SUCCESS,
    paintings
  }
}
