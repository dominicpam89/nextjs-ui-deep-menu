"use client"
import { createContext, useState } from "react"

const menuMock: TypeMenu[] = [
   {
      menuId: "asdqw98e76123",
      depth: 0,
      name: "systemmanagement",
      isOpen: true,
      parentId: null,
      children: [
         {
            menuId: "askjdhoqiwuye812",
            depth: 1,
            name: "System Management",
            isOpen: true,
            parentId: "asdqw98e76123",
            children: [
               {
                  menuId: "askdhqw8719273",
                  depth: 2,
                  name: "Systems",
                  isOpen: true,
                  parentId: "askjdhoqiwuye812",
                  children: [
                     {
                        menuId: "oqiuwye89172",
                        depth: 3,
                        name: "System Code",
                        isOpen: true,
                        parentId: "askdhqw8719273",
                        children: [],
                     },
                     {
                        menuId: "asdjg19872",
                        depth: 3,
                        name: "Code Registration-2",
                        isOpen: false,
                        parentId: "askdhqw8719273",
                        children: [],
                     },
                     {
                        menuId: "asdjhg19827",
                        depth: 3,
                        name: "Properties",
                        isOpen: false,
                        parentId: "askdhqw8719273",
                        children: [],
                     },
                     {
                        menuId: "askd918723",
                        depth: 3,
                        name: "Menus",
                        isOpen: true,
                        parentId: "askdhqw8719273",
                        children: [
                           {
                              menuId: "alskdjh1927",
                              depth: 4,
                              name: "Menu Registration",
                              isOpen: false,
                              parentId: "askd918723",
                              children: [],
                           },
                        ],
                     },
                     {
                        menuId: "nbkjhsuq8712",
                        depth: 3,
                        name: "APIList",
                        isOpen: true,
                        parentId: "askdhqw8719273",
                        children: [
                           {
                              menuId: "asjdoquw9761",
                              depth: 4,
                              name: "APIRegistration",
                              isOpen: false,
                              parentId: "nbkjhsuq8712",
                              children: [],
                           },
                           {
                              menuId: "asdkhqow76123",
                              depth: 4,
                              name: "APIEdit",
                              isOpen: false,
                              parentId: "nbkjhsuq8712",
                              children: [],
                           },
                        ],
                     },
                  ],
               },
               {
                  menuId: "asldkjh12763",
                  depth: 2,
                  name: "Users & Group",
                  isOpen: false,
                  parentId: "askjdhoqiwuye812",
                  children: [
                     {
                        menuId: "kjhoiuyqtw87123",
                        depth: 3,
                        name: "Users",
                        isOpen: true,
                        parentId: "asldkjh12763",
                        children: [
                           {
                              menuId: "asldkjqw78912",
                              depth: 4,
                              name: "User Account Registration",
                              isOpen: false,
                              parentId: "kjhoiuyqtw87123",
                              children: [],
                           },
                        ],
                     },
                     {
                        menuId: "kjhogiauysd9871",
                        depth: 3,
                        name: "Groups",
                        isOpen: true,
                        parentId: "asldkjh12763",
                        children: [
                           {
                              menuId: "lkuyqi7w612",
                              depth: 4,
                              name: "User Group Registration",
                              isOpen: false,
                              parentId: "kjhogiauysd9871",
                              children: [],
                           },
                        ],
                     },
                  ],
               },
               {
                  menuId: "asd9872639yw",
                  depth: 2,
                  name: "Competiton",
                  isOpen: false,
                  parentId: "askjdhoqiwuye812",
                  children: [],
               },
            ],
         },
      ],
   },
]

const StoreContext = createContext({
   menus: menuMock,
})

interface Props {
   readonly children: React.ReactNode
}

export default function StoreMockProvider({ children }: Props) {
   const [menus] = useState(menuMock)
   return (
      <StoreContext.Provider value={{ menus }}>
         {children}
      </StoreContext.Provider>
   )
}
