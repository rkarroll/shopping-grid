import { createContext, useState, ReactNode, useCallback, useMemo } from 'react'

export const ShoppingContext = createContext({})

export enum OperationTypes {
    ADD,
    SUBTRACT
}

const ShoppingProvider = ({ children }: {children: ReactNode}) => {
    const [selectedTags, setSelectedTags] = useState<string[] | null>([])
    const [shoppingCartVisibility, setShoppingCartVisibility] = useState(false)
    const [shoppingCartItems, setShoppingCartItems] = useState(new Map<string, number>())

    const addOrRemoveTags = useCallback((tag: string) => {
        if (selectedTags?.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag))
        } else {
            setSelectedTags([...(selectedTags || []), tag])
        }
    }, [selectedTags])

    // Using a map here so that instead having to iterate over an array of objects, in order to find
    // a specific product on the product page, and keeping the operational complextity as close to
    // O(1) as possible so front loading tne work with the creation of a new map here so in the actual
    // render I can do a .get which is way faster that iterating over an array.   
    const addOrRemoveProducts = useCallback((productId: string, operation: OperationTypes) => {
        const tempProductMap = new Map(shoppingCartItems)
        if (tempProductMap.has(productId)) {
            let quantity = tempProductMap.get(productId)
            if (operation === OperationTypes.ADD) {
                tempProductMap.set(productId, quantity! + 1)
                setShoppingCartItems(tempProductMap)
            } else {
                if (quantity! > 1) {
                    tempProductMap.set(productId, quantity! - 1)
                    setShoppingCartItems(tempProductMap)
                } else {
                    tempProductMap.delete(productId)
                    setShoppingCartItems(tempProductMap)
                }
            }
            setShoppingCartItems(tempProductMap)
        } else if (operation === OperationTypes.ADD) {
            tempProductMap.set(productId, 1)
            setShoppingCartItems(tempProductMap)
        }
    }, [shoppingCartItems, setShoppingCartItems]) 

    const value = useMemo(() => {
        return {shoppingCart: [shoppingCartVisibility, setShoppingCartVisibility], shoppingCartProducts: [shoppingCartItems, addOrRemoveProducts], tags: [selectedTags, addOrRemoveTags]}
    }, [shoppingCartVisibility, setShoppingCartVisibility, shoppingCartItems, addOrRemoveProducts, selectedTags, addOrRemoveTags])

    return (
        <ShoppingContext.Provider value={value}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingProvider