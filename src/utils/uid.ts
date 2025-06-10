// 通用唯一ID生成方法，优先使用 crypto.randomUUID，否则降级为 Math.random
export function getUid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2);
}
