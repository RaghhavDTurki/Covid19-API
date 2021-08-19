import { PORT } from './utils/consts';
import { ServerInfo } from 'apollo-server';
import { createLocalServer } from './server';

const main = async () => {
    const server = await createLocalServer();
    server.listen({port : PORT}).then(({ url }: ServerInfo) => {
        console.log(`Server is running on ${url}`);
    });
};

main().catch(console.error);
