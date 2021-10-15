import { FC, useContext } from 'react'
import { Wrap } from '@chakra-ui/react'
import FilterButton from 'components/FilterButton'
import Tag from './Tag'
import { ShoppingContext } from 'context/ShoppingProvider'

interface TagsProps {
  categories: any[]
}

const Tags: FC<TagsProps> = ({ categories }) => {
  const { tags } = useContext<any>(ShoppingContext)
  const [ selectedTags, addOrRemoveTags ] = tags
  return (
    <Wrap marginTop="17px" width="100%">
      {categories.map((category: string) => {
        return <Tag addOrRemoveTags={addOrRemoveTags} selected={selectedTags.includes(category)} key={`tag_${category}`}>{category}</Tag>
      })}
      <FilterButton />
    </Wrap>
  )
}

export default Tags