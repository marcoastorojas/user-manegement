import { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { Button, Box } from '@mui/joy';
import { UserStore, UserStoreState } from '../../UserStore';
import User from '../../Entities/User';
import { useNavigate } from 'react-router-dom';

function ChangeUserNameComponent() {
    var user: User | undefined = UserStore((state:UserStoreState) => state.user)
    const ChangeUserName = UserStore(state => state.ChangeUserName);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ UserName: user?.UserName});
    const [loading, setLoading] = useState(false);
    

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async(e: any) => {
        setLoading(true);
        e.preventDefault();

        if (!formData.UserName) {
            alert('El username es obligatorio');
            return;
        }
        await ChangeUserName(formData.UserName);
        setLoading(false);
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='UserName' backUrl="/"></AppBarComponent>
            <FormControl sx={{ width: '70%', mx: 'auto' }}>
                <FormLabel>User Name</FormLabel>
                <Input
                    name="UserName"
                    value={formData.UserName}
                    onChange={handleInputChange}
                />
            </FormControl>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                }}
            >
                <Button
                    type="submit"
                    color="success"
                    variant="soft"
                    fullWidth
                    loading={loading}
                >
                    Save
                </Button>
            </Box>
        </form>
    );
}

export default ChangeUserNameComponent;