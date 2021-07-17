import { resolveResource } from 'vk-io';
import { vk } from './consts';
import { userRepository } from './database';

export const rand = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getUser = async (resource: string) => {
    try {
        return await resolveResource({ api: vk.api, resource });
    } catch (e) {
        return null;
    }
};

export const getUserFromBD = async (id: number) => {
    const search = await userRepository.findOne(id);
    if (search) return search;

    const u = userRepository.create({
        id,
        rating: 0,
        analSize: 0,
        dickSize: 15,
    });

    return await userRepository.save(u);
};
