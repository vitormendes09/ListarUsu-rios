import { FastifyRequest,FastifyReply } from "fastify"
import { DeleteCustomerService } from "../services/DeleteCustomerService"



class DeleteCustomerController{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const customerService = new DeleteCustomerService()
        const {id} = request.query as {id: string}
        const customer = await customerService.execute({ id })

        replay.send(customer)
    }
}

export{DeleteCustomerController}