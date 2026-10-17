import { cache } from '@cf-wasm/og/workerd';

import blog from './routes/blog';
import general from './routes/general';
import gradient from './routes/gradient';

const routes: Record<string, (req: Request, env: Env) => Promise<Response>> = {
  '/api/general': general,
  '/api/gradient': gradient,
  '/api/blog': blog,
};

export default {
  async fetch(request, env, ctx) {
    const route = routes[new URL(request.url).pathname];
    if (!route || request.method !== 'GET') return env.ASSETS.fetch(request);

    const edgeCache = await caches.open('og');
    const hit = await edgeCache.match(request);
    if (hit) return hit;

    cache.setExecutionContext(ctx);
    const response = await route(request, env);
    if (response.ok) ctx.waitUntil(edgeCache.put(request, response.clone()));
    return response;
  },
} satisfies ExportedHandler<Env>;
