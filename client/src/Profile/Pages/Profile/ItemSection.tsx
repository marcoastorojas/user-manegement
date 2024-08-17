import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { ArrowForwardIos } from '@mui/icons-material';
import { ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

export default function ItemSection(props: { title: string, value?: string, url?: string }) {
    const { title, value, url } = props;
    const navigate = useNavigate();

    function navigateToPage(url: string) {
        navigate(url)
    }

    return (
        <ListItem sx={{ pt: 0, pb: 0, pl: 0, pr: 0 }}>
            <Card sx={{ width: '100%', boxShadow: 'none' }}>
                <CardHeader
                    action={
                        <IconButton
                            aria-label="update"
                            onClick={() => { url && navigateToPage(url) }}
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <ArrowForwardIos />
                        </IconButton>
                    }
                    title={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                    }
                    subheader={
                        value ? 
                        <Typography variant="caption" >
                            {value}
                        </Typography> 
                        : null
                    }
                    sx={{
                        '& .MuiCardHeader-action': {
                            alignSelf: 'center',
                        },
                    }}
                />
            </Card>
        </ListItem>
    );
}
