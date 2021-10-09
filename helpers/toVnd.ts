export default function toVnd(price?: number | string): string {
  if (!price) return ''
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(Number(price))
}
