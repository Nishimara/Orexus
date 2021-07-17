import { VK } from 'vk-io';
import { config } from './config';

export const vk = new VK({ token: config.token });
