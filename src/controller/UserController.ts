import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import {  UserInputDTO } from '../model/UserDTO'

const userBusiness = new UserBusiness()

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body
            const input: UserInputDTO = {
                name,
                email,
                password,
                role
            }

            const token = await userBusiness.signup(input)
            res.status(201).send({ message: `Usuário ${name} registrado com sucesso!` })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}