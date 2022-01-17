import { writable } from 'svelte/store';

export const audioPlayer = writable({
  id: null,
  name: '',
  url: '',
});