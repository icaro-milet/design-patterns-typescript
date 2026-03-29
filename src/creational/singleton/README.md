## Singleton

Esta pasta agrupa variacoes do padrao Singleton com a mesma ideia de demonstracao: dois modulos importam a mesma fonte de dados e operam sobre o mesmo estado.

### Organizacao

- `shared/user.ts`: tipo compartilhado entre os cenarios.
- `scenarios/generic/`: classe com `getInstance()`.
- `scenarios/modularity/`: objeto exportado pelo modulo.
- `scenarios/function/`: singleton criado por funcao autoexecutavel.
- `scenarios/typescript-javascript/`: classe com getter estatico.

### Como ler os exemplos

1. Abra `module-a.ts` para ver a carga inicial.
2. Execute `module-b.ts` para ver o estado compartilhado.
3. Compare o resultado final e a checagem de igualdade entre modulos.
