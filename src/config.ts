import { readFileSync } from 'fs';

interface iConfig {
    token: string;
}

export const config: iConfig = JSON.parse(readFileSync('config.json', 'utf-8'));
