'use client'
import React,{useState} from 'react'
import{ Container,TextField,Button,Typography} from '@mui/material';
import { Person, Lock } from '@mui/icons-material';

export default  function LoginForm(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const response = ()=>{ fetch('/api/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({email:email,password:password})
  })
  }
  
  return (   
   <Container component='form' sx={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',gap:'1.2rem', width:'100%',maxHeight:'100vh',marginTop:'2rem'}}>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Person fontSize='large'  color='info'/>
      <TextField
      hiddenLabel
      id="email"
      label="email"
      variant="outlined"
      type='email'
      size="small"
      sx={{width:'80%'}}
      onChange={(e)=>setEmail(e.target.value)}
   />
    </Container>

    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Lock fontSize='large' color='info'/>
      <TextField
        hiddenLabel
        id="password"
        variant="outlined"
        type='password'
        label='password'
        size='small'
        sx={{width:'80%',}}    
        onChange={(e)=>setPassword(e.target.value)}  
      />
    </Container>
    <Button variant='contained' color='primary' sx={{width:'20%'}} onClick={()=>response()}>
    Signin
    </Button>
  </Container>
  )
}