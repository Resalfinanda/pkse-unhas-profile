export interface DivisionMember {
  id: number
  division_id: number
  name: string
  created_at: string
}

export interface Division {
  id: number
  name: string
  head_name: string
  created_at: string
  division_members?: DivisionMember[]
}
