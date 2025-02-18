# CURL

## Cadastrando usuário

```bash
curl -X POST http://localhost:3000/cadastro -H "Content-Type: application/json" -d '{"nome": "Ricardo Fahham", "email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'
```

## Obter token

```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'
```

## Excluir usuario

```bash
curl -X DELETE http://localhost:3000/usuario -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjNlOTA4ZGRmMTg3OWY3MTIwMmE2ZCIsImVtYWlsIjoicmZhaGhhbUBnbWFpbC5jb20iLCJpYXQiOjE3Mzk4NDQ0MDEsImV4cCI6MTczOTg0ODAwMX0.e5nt8IwQYqlspOY-jPaRUd78B9X4tEI2KUcBxHKplh8" -d '{"email": "rfahham@gmail.com"}'
```

## Cadastrar Apartamento

```bash
curl -X POST http://localhost:3000/apartamento -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjNmNGVmZDkxNWM3Mjc0MmU3ZTZhNyIsImVtYWlsIjoicmZhaGhhbUBnbWFpbC5jb20iLCJpYXQiOjE3Mzk5MDkxMzQsImV4cCI6MTczOTkxMjczNH0.7c3nsCrsGVQfLM_aiZUzVzYv-x0OhYw-bbW85nFhB4M" -d '{"apartamento": "804", "telefone_contato": "+55 21 98002-5474", "moradores": ["Ricardo Fahham", "Alessandra Rodrigues Miranda"], "tipo_pessoa": "locatário", "vistoria": { "gás": "2025-02-18", "água": "2025-02-18"}}'
```
## Listando todos os apartamentos

```bash
curl -X GET http://localhost:3000/apartamentos | jq | grep apartamento
```

