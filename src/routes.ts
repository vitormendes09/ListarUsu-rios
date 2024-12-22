import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async ( request: FastifyRequest, replay: FastifyReply) => {
        return {ok: true}
    })

}
