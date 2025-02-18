# Documentação

## CONDOMÍNIO

```bash
curl -X POST http://localhost:3000/condominio -H "Content-Type: application/json" -d '{
  "endereco": "Rua General Osório, 89 - Centro, Petrópolis - Rio de Janeiro",
  "sindico": {
    "nome": "João da Silva",
    "telefone": "987654321"
  },
  "funcionarios": [
    {
      "nome": "Sebastião",
      "telefone": "998877665"
    },
    {
      "nome": "Marcelo",
      "telefone": "993344556"
    },
    {
      "nome": "José Antonio",
      "telefone": "993344556"
    },
    {
      "nome": "Sebastião",
      "telefone": "993344556"
    }
  ]
}'


```


--- 

## MORADOR

## POST /apartamentos: 
Para criar um novo apartamento (envie os dados no corpo da requisição).

```bash
curl -X POST http://localhost:3000/apartamentos -H "Content-Type: application/json" -d '{                                                                          
      "apartamento": 102,
      "telefone_contato": "+55 11 91234-0002",
      "moradores": [
        "Carlos Pereira",
        "Ana Costa"
      ],
      "vistoria": {
        "gás": "2025-02-17",
        "água": "2025-02-17"
      }
    }'
```

## GET /apartamentos: 
Para obter todos os apartamentos.

```bash
curl http://localhost:3000/apartamentos
```

## GET /apartamentos/:id: 
Para obter um apartamento específico pelo ID.

```bash
curl http://localhost:3000/apartamentos/101
```

## PUT /apartamentos/:id: 
Para atualizar um apartamento pelo ID.

```bash
curl -X PUT http://localhost:3000/apartamentos/101 -H "Content-Type: application/json" -d '{"telefone_contato": "987654321", "moradores": ["João", "Maria", "Carlos"]}'
```

## DELETE /apartamentos/:id: 

Para deletar um apartamento pelo ID.

```bash
curl -X DELETE http://localhost:3000/apartamentos/102
```