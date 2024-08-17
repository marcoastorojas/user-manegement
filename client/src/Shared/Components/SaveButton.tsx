import { Box, Button } from "@mui/joy";

export const SaveButton = () => (
    <Box sx={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', width: '70%' }}>
        <Button
            type="submit"
            color="success"
            variant="soft"
            fullWidth
            sx={{
                bgcolor: '#BBE982',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', 
                },
                fontWeight: 'bold'
            }}
        >
            Save
        </Button>
    </Box>
);