const buffers = new Map<string, Promise<ArrayBuffer>>();

export function loadAsset(env: Env, path: string) {
  let buffer = buffers.get(path);
  if (!buffer) {
    buffer = env.ASSETS.fetch(new URL(path, 'https://assets.invalid')).then(
      (res) => {
        if (!res.ok) throw new Error(`Missing asset ${path} (${res.status})`);
        return res.arrayBuffer();
      }
    );
    buffers.set(path, buffer);
  }
  return buffer;
}

let logo: Promise<string> | undefined;

export function defaultLogo(env: Env) {
  logo ??= loadAsset(env, '/images/logo.jpg').then((bytes) => {
    let binary = '';
    for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte);
    return `data:image/jpeg;base64,${btoa(binary)}`;
  });
  return logo;
}
