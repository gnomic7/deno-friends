import {Application} from 'https://deno.land/x/oak/mod.ts';
const port = 15000;
// console.log(Deno.env )
import router from './routes.ts';
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Running server on port ${port}`);
await app.listen({port});