declare type TypeMenu = {
   menuId: string
   depth: number
   name: string
   isOpen: boolean
   parentId: string | null
   children: TypeMenu[]
}
