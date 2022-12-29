import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);
  const user = users.find(user => user.userId === userId)
  return (
    <span>{user ? user.name : 'Unknown User'}</span>
  )
}

export default PostAuthor