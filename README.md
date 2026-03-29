## Design Patterns TypeScript

Repositorio de estudo com exemplos de padroes de projeto em TypeScript.

### Estrutura atual

- `src/creational/`: exemplos de padroes de criacao.
- `src/creational/singleton/`: implementacoes do padrao Singleton por abordagem.
- `src/behavioral/` e `src/structural/`: reservados para futuras implementacoes.

### Singleton

Os cenarios atuais mostram a mesma ideia com abordagens diferentes:

- `generic`: classe com `getInstance()`.
- `modularity`: estado compartilhado pelo modulo.
- `function`: singleton criado por IIFE.
- `typescript-javascript`: classe com `static get instance()`.

### Comandos

```bash
npm run check
npm run singleton:generic
npm run singleton:modularity
npm run singleton:function
npm run singleton:ts-js
```

### Convencoes

- Cada pasta de cenario contem um exemplo executavel.
- Tipos compartilhados do Singleton ficam em `src/creational/singleton/shared/`.
- `module-a.ts` prepara o estado inicial.
- `module-b.ts` demonstra que ambos os modulos compartilham a mesma instancia.
