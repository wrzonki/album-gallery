import { writable } from 'svelte/store';

export const audioPlayer = writable({
  previewURL: '',
  albumName: '',
  artistName: '',
});