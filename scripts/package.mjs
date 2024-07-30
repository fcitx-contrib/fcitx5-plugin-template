// eslint-disable-next-line
import packageJson from '../package.json' with { type: "json" }
import { chdir } from 'process'
import { spawnSync } from 'child_process'
import { rmSync, mkdirSync, cpSync } from 'fs';

const { name } = packageJson

if (name.includes('/')) {
  throw new Error('No organization allowed in package name.')
}

const dir = `package/${name}`

rmSync('package', { recursive: true, force: true })
mkdirSync(dir, { recursive: true })
cpSync('dist', `${dir}/dist`, { recursive: true })
cpSync('package.json', `${dir}/package.json`)
chdir('package')
spawnSync('zip', ['-r', `${name}.zip`, name], { stdio: 'inherit' })
