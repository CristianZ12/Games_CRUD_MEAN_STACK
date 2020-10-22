import { Request, Response } from 'express';

class IndexControllers{

    public index (req:Request, resp:Response){
        resp.send('Hello');
    }

}

export const indexControllers = new IndexControllers();