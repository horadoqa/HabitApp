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