import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
    res.send('hello world')
}

const x = () => {
    console.log('hello world')
}