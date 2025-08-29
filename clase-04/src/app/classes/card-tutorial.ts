// export class CardTutorial {
//   //imagen?: string; //? indica que tambien puede ser undefined
//   imagen: string;
//   titulo: string;
//   descripcion: string;
//   url: string;
//   textoUrl: string;

//   constructor({
//     imagen,
//     titulo,
//     descripcion,
//     url,
//     textoUrl, //objeto como parametro
//   }: CardTutorialType) {}
// }

export type CardTutorialType = {
  imagen: string;
  titulo: string;
  descripcion: string;
  url: string;
  textoUrl: string;
};
