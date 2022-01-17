import { writable } from 'svelte/store';

export const audioPlayer = writable({
  url: '',
  name: '',
  id: '',
});