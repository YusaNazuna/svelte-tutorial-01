import { writable } from 'svelte/store';

// カードの表示・非表示
export const open = writable(false);

// 記事番号
export const storeArticleId = writable(1);

// 記事内コンテンツ番号
export const storeStoryId = writable(1);
