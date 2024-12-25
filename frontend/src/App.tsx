import{useEffect, useState} from 'react'
import {FiTrash} from 'react-icons/fi'
import { api } from './services/api'


interface customersProps{
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}
export default function App(){
  const [customers, setCustomers] = useState<customersProps[]>([])
  
  useEffect(() => { 
    loadCustomers();
  }, [])



  async function loadCustomers(){

    const response = await api.get('/customers')
    setCustomers(response.data);
  }


  return(
    
    <div className="w-full min-h-screen bg-yellow-950 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white"> Clientes</h1>

        <form className="flex-col my-6">
          <label htmlFor=""
          className="font-medium text-white"> 
          Nome: 
          </label>
          <input type="text" 
          className="w-full mb-5 bg-white p-2 rounded-lg mt-2" 
          placeholder="Digite seu nome completo..."/>

          <label htmlFor=""
          className="font-medium text-white"> 
          Email: 
          </label>
          <input type="email" 
          className="w-full mb-5 bg-white p-2 rounded-lg mt-2" 
          placeholder="Digite seu Email..."/>

          <input 
          type="submit" 
          value= "Cadastrar" 
          className="cursor-pointer w-full bg-black text-cyan-700 font-medium"/>

        </form>

        <section  className="flex flex-col">

          {customers.map( (customer) => (
            <article
          className="bg-white w-full p-4 rounded-lg mb-4 relative hover:scale-105 duration-500">
            
            <p className=""> <span className="font-medium"> Nome: </span> {customer.name} </p>
            <p className=""> <span className="font-medium"> Email: </span> {customer.email} </p>
            <p className=""> <span className="font-medium"> Status: </span> {customer.status ? "Ativo" : "Inativo"} </p>

            <button 
            className='mt-2 bg-black p-2 rounded-lg h-7 w-7 absolute right-0 -top-2'>
              <FiTrash className="text-red-500 size-3" />
            </button>
          </article>
        ))}
        </section>
      </main>
      
     
    </div>

  )
}