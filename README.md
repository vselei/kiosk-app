# Kiosk App

### Features
- [x] Página inicial
- [x] Requisição e exibição das categorias
- [x] Eager loading dos produtos
- [x] Exibição dos produtos utilizando React Modal
- [x] Operações CRUD com os produtos
- [x] React Toastify para notificações
- [x] Resumo do pedido
- [x] Armazenamento do pedido em uma DB
- [x] Painel de administração
- [x] Exibição dos pedidos
- [x] SWR para atualização em tempo real dos pedidos

##

### Preview da aplicação:

https://user-images.githubusercontent.com/122689920/218267870-50e534f7-3061-4c09-a1ce-16c82c6c0a0c.mp4

##

### Pré-requisitos

- Visual Studio Code (recomendado)
- MySQL Workbench (recomendado)

##

### Inicialização

Para realizar a instalação dos pacotes:
```
npm install
```

Migrar tabelas:
```
npx prisma migrate dev
```

Configurar package.json:
```
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

Criar arquivo .env:
```
DATABASE_URL="mysql://user:password@localhost:3306/schema"
```

Rodar aplicação:
```
npm run dev
```

OBS: Caso queira utilizar outro banco de dados, terá que configurar o prisma

##

### Ferramentas Utilizadas

- Next.js
- Context API
- SWR
- Tailwind CSS
- Prisma
- MySQL

##

Visite o site: <a href="https://kiosk-app-production.up.railway.app/">Kiosk App</a>
