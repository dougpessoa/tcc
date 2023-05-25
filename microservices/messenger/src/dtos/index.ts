export interface MessageDTO {
  message: string,
  issuer_ip?: string
  issuer_city?: string
  issuer_contry?: string
  platform: number
  username: string
}