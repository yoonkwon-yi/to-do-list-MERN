import { useState, useEffect, useContext } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import Grid from '@material-ui/core/Grid'
import { GlobalContext } from '../context/GlobalState'

const TodoItem = ({ todoListData, key }) => {
  const [checked, setChecked] = useState([])
  const { deleteItem } = useContext(GlobalContext)

  return (
    <Grid container spacing={1} justify='center'>
      {todoListData.length !== 0 ? (
        <List
          dense
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem
            secondaryAction={
              <Checkbox
                edge='end'
                color='secondary'
                onClick={() => deleteItem(todoListData._id)}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${todoListData.text + 1}`}
                  src={`/static/images/avatar/${todoListData.text + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText primary={`${todoListData.text}`} />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <div>This is Empty</div>
      )}
    </Grid>
  )
}

export default TodoItem
