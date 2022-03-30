import sanityClient from '@sanity/client';

export const Client = sanityClient({
  projectId: '8mwxy8ss',
  dataset: 'production',
  apiVersion: '2022-03-15',
  token:
    'skgiJODoZi8uFHFg9k3GvkzFQv3HgR39xcioNbyeElF9CKhXPocgK2D3l4I7GQObu5mGj8kOEfnwuGo32wN89NVyWJ1NapMrEjLMFXOh4g2VGheCyG5gfEXWk4Pp4oVffsobsQbB8Kv0KdQ5WCb69btItyKU1fIarqt9I0G0n5uJMDzaa0Kb',
  useCdn: false,
});
