import { MessageContext } from 'vk-io';
import { getUser, getUserFromBD } from '../../functions';

export const info = async (context: MessageContext) => {
    if (!context.text) return;

    let target = context.senderId;
    if (context.text.length > 5) {
        const user = await getUser(context.text.slice(6));
        if (user?.type === 'user') target = Number(user.id);
    }

    const res = await getUserFromBD(target);
    return context.reply(`Стата [id${res.id}|этого] уебка:\n` +
    `Хуй: ${res.dickSize} см\n` +
    `Анал: ${res.analSize} см\n` +
    `Рейтинг: ${res.rating}`, {disable_mentions: true});
};