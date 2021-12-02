import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface ICreateMessageDTO {
   to: string
   roomId: string
   text: string
}

@injectable()
class CreateMessageService {
   async execute({ to, roomId, text }: ICreateMessageDTO) {
      const message = await Message.create({
         to,
         roomId,
         text
      })

      return message
   }
}

export { CreateMessageService }