import { makeInstaller } from '@rmm-ui/utils'
import components from './components'
import '@rmm-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@rmm-ui/components'
export default installer
