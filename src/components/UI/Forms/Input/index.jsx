import TextField from '@mui/material/TextField';
import s from './Input.module.scss'


const Inputs = ({type, placeHolder}) => {
  return (
    <TextField
      className={s.input}
      type={type}
      id="outlined-basic" 
      label={placeHolder}
      variant="outlined"
      InputLabelProps={{ style: { color: '#929292' } }}
      sx={{
        outlineColor:"black",
        borderRadius:"4px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderWidth: '0', 
          },
        },
      }}
      
    />
      
  )
}

export default Inputs
