import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { MessageDTO } from "../dtos";

const messageSchema = new Schema<MessageDTO>({
  message: { type: String, required: true },
  issuer_ip: { type: String, required: false },
  issuer_city: { type: String, required: false },
  issuer_contry: { type: String, required: false },
  platform: { type: Number, required: true },
  username: { type: String, required: true },
})

messageSchema.plugin(paginate);

const Message = model<MessageDTO, PaginateModel<MessageDTO>>('Message', messageSchema)

export { Message, MessageDTO }