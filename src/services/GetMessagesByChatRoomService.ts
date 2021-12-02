import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";
import { User } from "../schemas/User"


@injectable()
class GetMessagesByChatRoomService {
   async execute(roomId: string) {
      const messages = await Message.find({
         roomId
      })
         .populate('to')
         .exec()

      return messages
   }
}

export { GetMessagesByChatRoomService }