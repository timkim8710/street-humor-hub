self.addEventListener('install', (event) => {
  console.log('Street Humor PWA Installed');
});

self.addEventListener('fetch', (event) => {
  // Required for PWA installation prompt
});
