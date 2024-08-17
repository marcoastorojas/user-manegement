import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function AppBarComponent({ title, backUrl }: { title: string, backUrl?: string }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {backUrl ?
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: 'black' }}
              onClick={ () => { navigate(backUrl) }  }
            >
              <ArrowBack />
            </IconButton> : null 
          }
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}
          >
            {title}
          </Typography>
          {backUrl ?
            <Box sx={{ width: 48 }} />  : null 
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
