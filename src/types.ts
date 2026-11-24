export interface Character {
  id: number
  name: string
  age: number
  birthdate: number | null
  gender: string
  occupation: string
  status: string
  phrases: string
  portrait_path: string
}

export interface CharactersResponse {
  count: number
  next: string | null
  prev: string | null
  page: number
  results: Character[]
}
