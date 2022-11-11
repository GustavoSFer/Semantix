const bodycreate = {
  email: 'gustavo@gmail.coom',
  password: '1sfds@'
}

const dataDb = [
  {
    "suprimentos": [],
    "_id": "636ac7532d80f3d1f4527f75",
    "name": "teste",
    "email": "gustavo@gmail.coom",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636aca1eb7f60e99caaba3a2",
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636acda341e5de8b9a411d0b",
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636ace50c3a4314f1cc578a7",
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "973c7c2505b1024e264e88508489d286",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636ad02e7ba3d9fdcdc4dc47",
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "ebddb79d7d84442f719ca85b9804eb13",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  }
];

const grupoFornecedor = [
  {
    "suprimentos": [],
    "_id": "636ac7532d80f3d1f4527f75",
    "name": "teste",
    "email": "gusjtafdsd@gmail.coom",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636aca1eb7f60e99caaba3a2",
    "name": "teste",
    "email": "gusjtafdsd@gmail.coom",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  },
  {
    "suprimentos": [],
    "_id": "636acda341e5de8b9a411d0b",
    "name": "teste",
    "email": "gusjtafdsd@gmail.coom",
    "password": "1sfds@",
    "grupo": "fornecedor",
    "empresa": "digimatec",
    "cnpj": "20.123.443-87",
    "__v": 0
  }
]

const grupoCozinheiro = [
  {
    "suprimentos": [],
    "_id": "636b01cb67db94a514c29965",
    "name": "teste",
    "email": "gusjtafdsd@gmail.coom",
    "password": "2d761333c9a1e0391fcf672d214ad511",
    "grupo": "cozinheiro",
    "__v": 0
  },
  {
    "_id": "636c3b5a0b319c8999ea063d",
    "name": "fdssd",
    "email": "gustavo.s.fer@hotmail.com",
    "password": "73882ab1fa529d7273da0db6b49cc4f3",
    "grupo": "cozinheiro",
    "suprimentos": [],
    "__v": 0
  },
  {
    "_id": "636c3c6d0b319c8999ea0640",
    "name": "cood",
    "email": "cozinheor@gmailc.com",
    "password": "c9eb228d75a77e8607fa4a9c8583ce3d",
    "grupo": "cozinheiro",
    "suprimentos": [],
    "__v": 0
  }
];

const grupoSuprimentos = [
  {
    "_id": "636bc6ee544de17e3dc9381a",
    "name": "Gustavo Fernandes",
    "email": "gustavo@gmail.com",
    "password": "7beb04f055ae4ec109e74162520c11b1",
    "grupo": "suprimentos",
    "suprimentos": [
      "arroz"
    ],
    "__v": 0
  },
  {
    "_id": "636c4dc93c9f0ebc9b3ffd3b",
    "name": "supriiii",
    "email": "gustavo.s.fer@hotmail.com",
    "password": "0514d2754792bd5a48726cac876bc19c",
    "grupo": "suprimentos",
    "suprimentos": [
      "Arroz",
      "Arroz",
      "Feijão"
    ],
    "__v": 0
  },
  {
    "_id": "636c4e416a7c0e78b53068d3",
    "name": "gfdgdf",
    "email": "gustavo.s.fer@hotmail.com",
    "password": "a29b68aede41e25179a66c5978b21437",
    "grupo": "suprimentos",
    "suprimentos": [
      "Macarrão",
      "",
      ""
    ],
    "__v": 0
  }
];

const resultProvider = {
  suprimentos: [],
  _id: 'new ObjectId("636ac7532d80f3d1f4527f75")',
  name: 'teste',
  email: 'gusjtafdsd@gmail.coom',
  password: '1sfds@',
  grupo: 'fornecedor',
  empresa: 'digimatec',
  cnpj: '20.123.443-87',
  __v: 0
};

module.exports = {
  dataDb,
  bodycreate,
  grupoFornecedor,
  grupoCozinheiro,
  grupoSuprimentos,
  resultProvider,
};