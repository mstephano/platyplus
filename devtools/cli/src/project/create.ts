import { loadYaml } from '@platyplus/fs'
import path from 'path'

import { DEFAULT_WORKING_DIR } from '../settings'
import { ensureWorkspace } from '../utils'
import { defaultPdtConfig } from './default'
import { getProject } from './get'
import { DevToolsConfig } from './types'

export const createProject = async (
  name: string,
  directory: string,
  description = ''
): Promise<DevToolsConfig> => {
  try {
    await getProject(name)
    throw Error('exists')
  } catch (e) {
    if (e.message !== 'exists') {
      const yamlPath = path.join(DEFAULT_WORKING_DIR, directory, 'config.yaml')
      await ensureWorkspace(`${directory}/*`)
      return await loadYaml(yamlPath, defaultPdtConfig(name, description))
    } else throw Error('Project already exists')
  }
}