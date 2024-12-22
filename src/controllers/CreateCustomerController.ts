import {FastifyRequest, FastifyReply} from 'fastify';

import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController{
    async handle(request: FastifyRequest, replay: FastifyReply){

        const {name, email} = request.body as { name: string, email: string};

       
        const customreService = new CreateCustomerService();

        const customer= await customreService.execute({ name, email});

        replay.send(customer)
    }
}

export {CreateCustomerController}