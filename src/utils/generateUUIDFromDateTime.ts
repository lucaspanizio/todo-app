/**
 * Gera um identificador único baseado na data/hora atual e um valor aleatório.
 *
 * O UUID gerado tem o formato `<timestamp>-<random>`, onde:
 * - `timestamp`: número de milissegundos desde 1970-01-01 convertido para base36 (mais compacto que decimal).
 * - `random`: sequência de 6 caracteres aleatórios gerados a partir de `Math.random()`, também em base36.
 *
 * Exemplo de saída: `'l8lht9-3f2kqz'`
 *
 * @returns {string} Um identificador único baseado no tempo e aleatoriedade.
 */
export const generateUUIDFromDateTime = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8); // 6 caracteres aleatórios
  return `${timestamp}-${random}`;
};
