import { writable } from 'svelte/store';

export const audioPlayer = writable({
  id: 237,
  name: 'song 1',
  url: 'https://pawel-wrzosek.pl/stock-audio/1.mp3',
});