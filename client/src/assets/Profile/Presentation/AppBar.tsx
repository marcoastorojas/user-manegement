import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@mui/icons-material';

export default function AppBarComponent(props:any) {
  console.log(props);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ backgroundColor: 'white' }} 
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit" 
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }} 
          >
            <ArrowBack />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }} 
          >
            User Name
          </Typography>
          <Box sx={{ width: 48 }} /> {}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
