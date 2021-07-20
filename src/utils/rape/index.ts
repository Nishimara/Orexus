import { MessageContext } from 'vk-io';
import { userRepository } from '../../database';
import { getUser, getUserFromBD } from '../../functions';

export const rape = async (context: MessageContext) => {
    if (!context.text) return;
    if (context.text.length === 5 && !context.replyMessage) return context.reply('пошел нахуй ты никого не ебешь');
    if (context.replyMessage && context.replyMessage.senderId < 0) return context.reply('я дружу с группами пошел нахуй');

    const owner = context.senderId;
    let target;

    if (context.text.slice(6)) {
        const res = await getUser(context.text.slice(6));
        if (res && res.type === 'user') target = res.id;
        else return context.reply('что за хуйню ты мне подсунул');
    } else target = context.replyMessage?.senderId;
    if (!target) return context.reply('долбоеб кого ебать то');
    if (owner === target) return context.reply('нахуй ты себя ебешь');

    const ownerData = await getUserFromBD(owner);
    const targetData = await getUserFromBD(target);
    if (ownerData.dickSize <= 0.1) return context.reply('пчел у тебя хуй маленький');
    ownerData.dickSize = +(ownerData.dickSize - 0.1).toFixed(2);
    targetData.analSize = +(targetData.analSize + 0.1).toFixed(2);

    await userRepository.save(ownerData);
    await userRepository.save(targetData);

    // TODO: рейтинг
    if (targetData.sex === 2)
    return await context.reply(`пиздец, [id${owner}|чел] трахнул [id${target}|чела] и увеличил его очко на 0.1 см...\n` + 
        'как же он кричал что не хотел быть пидором...', {disable_mentions: true,});
    return await context.reply(`пиздец, [id${owner}|чел] трахнул [id${target}|чела] и увеличил ее очко на 0.1 см...\n` + 
        'как же она стонала...', {disable_mentions: true})
};
