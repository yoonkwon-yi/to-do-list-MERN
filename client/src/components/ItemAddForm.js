import Button from '@material-ui/core/Button'
import { GlobalContext } from '../context/GlobalState'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'
import React, { useContext, useState } from 'react'

const ItemAddForm = () => {
  const [text, setText] = useState('')
  const { addItem } = useContext(GlobalContext)

  const onClick = e => {
    const newItem = {
      text: text
    }

    console.log(text)

    addItem(newItem)
    setText('')
  }

  return (
    <>
      <Grid container spacing={1} justify='center'>
        <TextField
          id='outlined-multiline-static'
          label='What To Accomplish?'
          multiline
          rows={4}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button
          startIcon={<AddIcon style={{ fontSize: '3em' }} />}
          onClick={onClick}
        />
      </Grid>
    </>
  )
}

export default ItemAddForm
