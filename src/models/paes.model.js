import mongoose from 'mongoose';

const PaesSchema = new mongoose.Schema(
  { 
    id: {
      type: String,
      required: true,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
  },
  { versionKey: false },
);

const Paes = mongoose.model('paes', PaesSchema);

export default Paes;
