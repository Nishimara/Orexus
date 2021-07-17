import { MessageContext } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { vk } from './consts';
import { rape, info } from './utils';

const hearManager = new HearManager<MessageContext>();
vk.updates.on('message_new', hearManager.middleware);
hearManager.hear(/^\/rape/, rape);
hearManager.hear(/^\/info/, info);

vk.updates.start().then(() => console.log('i work'));
