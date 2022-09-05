export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado.")
    }
}

export class FieldsNotProvided extends CustomError {
    constructor(){
        super(400, 'Preencha os campos "name", "email", "password" e "role".')
    }
}

export class EmailAlreadyInUse extends CustomError {
    constructor(){
        super(409, "Este email já está em uso por outra conta.")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Muito curto para ser um nome.")
    }
}

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Forneça um email válido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "A senha deve ter no mínimo 6 caracteres.")
    }
}

export class InvalidRole extends CustomError {
    constructor(){
        super(422, 'A propriedade "role" deve ser "admin" ou "user".')
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class InvalidToken extends CustomError{ 
    constructor(){
        super(404, "Esse token é inválido")
    }
}

export class MissingInformation extends CustomError{
    constructor() {
        super(400, 'É necessário completar os campos "title" e "description".')
    }
}

export class MissingToken extends CustomError{
    constructor() {
        super(400, 'É necessário fornecer um token.')
    }
}