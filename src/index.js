import { configure } from 'mobx'

configure({ enforceActions: 'strict', isolatedGlobalState: true })

export * from 'mobx'

export { Model, Propose } from './model'
export { State } from './state'
export { observer as View } from 'mobx-react'