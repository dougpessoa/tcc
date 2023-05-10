import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from 'mongoose-paginate-v2';

interface IMessage {
  message: string,
  issuer_ip: string
  issuer_city: string
  issuer_contry: string
  platform: string
  username: string
}

const messageSchema = new Schema<IMessage>({
  message: { type: String, required: true },
  issuer_ip: { type: String, required: true },
  issuer_city: { type: String, required: true },
  issuer_contry: { type: String, required: true },
  platform: { type: String, required: true },
  username: { type: String, required: true },
})

messageSchema.plugin(paginate);

const Message = model<IMessage, PaginateModel<IMessage>>('Message', messageSchema)

export { Message, IMessage }