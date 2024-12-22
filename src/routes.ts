import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async ( request: FastifyRequest, replay: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, replay:FastifyReply) => {
        return new CreateCustomerController().handle(request,replay)
    })

}
