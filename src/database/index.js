// const paes = [
//     {
//       id: 1,
//       nome: 'Pão Grahan',
//       preco: 'R$ 3,00',
//       descricao:
//         'Pão integral tipo graham- sem gorduras, sem adição de açúcar- Feito om farinha de trigo integral fresca, moída diariamente em moinho de pedras.',
//       foto: 'https://i.ibb.co/tBtHB0P/kisspng-graham-bread-sourdough-bakery-small-bread-5bf8277eef5d61-5022330815429896949804-Copia.png',
//     },
//     {
//       id: 2,
//       nome: 'Pão Doce',
//       preco: 'R$ 2,00',
//       descricao:
//         'Pão Doce Com Recheio De Creme De Confeiteiro É Simples E Especial. Sua Massa Leva Farinha, Açúcar, Sal, Leite E Margarina.',
//       foto: 'https://i.ibb.co/DRhy1wN/p-o-doce-png-Transparente-Download-Copia.png',
//     },
//     {
//       id: 3,
//       nome: 'Pão de leite',
//       preco: 'R$ 2,15',
//       descricao:
//         'Pão de leite com noz-moscada. Macio, adocicado, perfumado e com um sabor surpreendente trazido pela noz-moscada.',
//       foto: 'https://i.ibb.co/wKwzwsw/p-o-de-leite-png-Foto-transparente-gr-tis-Copia.png',
//     },
//     {
//       id: 4,
//       nome: 'Pão de forma',
//       preco: 'R$ 3,10',
//       descricao:
//         ' Pão de Forma Caseiro delicioso e fofinho feito com Leite Líquido NINHO Forti+ Integral, farinha de trigo, fermento biológico seco e manteiga.',
//       foto: 'https://i.ibb.co/SRVBsNJ/pao-de-ceteio-Copia.png',
//     },
//     {
//       id: 5,
//       nome: 'Pão Árabe',
//       preco: 'R$ 2,75',
//       descricao:
//         'Também conhecido como pão árabe, o pita é acompanhamento indispensável do babaganush, homuns e para preparar o beirute.',
//       foto: 'https://i.ibb.co/7j2ShWz/pao-arabe-png-Fundo-transparente-gr-tis-Copia.png',
//     },
//     {
//       id: 6,
//       nome: 'Pão de arroz',
//       preco: 'R$ 2,89',
//       descricao:
//         'Pão de arroz é mais um pão sem gluten aprovado. Feito com os grãos de arroz , eles ficam muito macios e gostosos. Além de saudável.',
//       foto: 'https://i.ibb.co/zb9ZtmM/Pngtree-sea-salt-bread-cereals-breakfast-6370258-Copia.png',
//     },
//     {
//       id: 7,
//       nome: 'Pão de queijo',
//       preco: 'R$ 1,00',
//       descricao:
//         'O Pão de Queijo é cuidadosamente elaborado com o tradicional queijo mineiro. Macio e levemente crocante, é ideal para encontros, reuniões ou café da manhã.',
//       foto: 'https://i.ibb.co/jbyYWD8/paodequeijo.png',
//     },
//   ];
import {connect} from 'mongoose';

export const connectDB = () => {

  connect(process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};




