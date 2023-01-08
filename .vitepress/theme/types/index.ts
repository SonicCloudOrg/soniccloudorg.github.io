export interface Contributor {
  name: string
  link: string
  avatar: string
}

export interface SponsorsItem {
  name: string
  url: string
  img: string
}

type GridSize = 'xmini' | 'mini' | 'small' | 'medium' | 'big'

export interface Sponsors {
  tier?: string
  size?: GridSize
  items: SponsorsItem[]
}
