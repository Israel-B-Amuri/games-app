import{ Container,TextField,Button} from '@mui/material';
import { Person,Email,Lock } from '@mui/icons-material';


export default function RegisterForm(){
  return (   
   <Container component='div' sx={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',gap:'1.2rem', width:'100%'}}>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Person fontSize='large'  color='info'/>
      <TextField
      hiddenLabel
      id="name"
      label="fullname"
      variant="outlined"
      size="small"
      sx={{width:'80%'}}
   />
    </Container>

    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Email fontSize='large' color='info'/>
      <TextField
        hiddenLabel
        id="email"
        variant="outlined"
        label='email'
        type='email'
        size='small'
        sx={{width:'80%',}}
        
      />
    </Container>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
    <Lock color='info' fontSize='large'/>
    <TextField
        hiddenLabel
        id="password"
        variant="outlined"
        type='password'
        label='password'
        size='small'
        sx={{width:'80%',}}        
      />
    </Container>
    <Button variant='contained'>Signup</Button>
  </Container>
  )
}