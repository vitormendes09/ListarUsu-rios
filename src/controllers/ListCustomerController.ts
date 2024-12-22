import prismaClient from "../prisma";
import { ListCustomerService } from "../services/ListCustomerService"
import { FastifyRequest, FastifyReply } from "fastify"
class ListCustomerController{    
    async handle(request: FastifyRequest, replay: FastifyReply){
        const listCustomerService = new ListCustomerService();

        const customers = await prismaClient.customer.findMany();

        replay.send(customers);
    }

}

export {ListCustomerController}