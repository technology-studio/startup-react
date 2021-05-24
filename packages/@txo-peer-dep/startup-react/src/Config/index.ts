/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2021-05-21T16:05:67+02:00
 * @Copyright: Technology Studio
**/

import { ConfigManager } from '@txo/config-manager'

export type Config = {
  startupSaga: () => Promise<void>,
}

export const configManager: ConfigManager<Config> = new ConfigManager<Config>({
  startupSaga: undefined,
})
