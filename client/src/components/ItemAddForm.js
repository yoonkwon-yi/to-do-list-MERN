import Button from '@material-ui/core/Button'
import { GlobalContext } from '../context/GlobalState'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'
import React, { useContext, useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const ItemAddForm = () => {
  const [text, setText] = useState('')
  const { addItem } = useContext(GlobalContext)

  const handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      text: text
    }

    console.log(text)

    addItem(newItem)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='addText'>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          spacing={3}
          justify='center'
        >
          <Grid item xs={6}>
            <TextField
              required
              id='outlined-static'
              label='Add What To Accomplish Today!'
              style={{ width: '100%' }}
              variant='outlined'
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              className='buttonAdd'
              startIcon={<AddIcon style={{ fontSize: '3em' }} />}
              onClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

export default ItemAddForm
