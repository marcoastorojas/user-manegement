import { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { Button, Box } from '@mui/joy';
import { UserStore } from '../../UserStore';

function ChangePasswordComponent() {
    const ChangePassword = UserStore(state => state.ChangePassword);

    const [formData, setFormData] = useState({
        Password: "",
        RePassword: ""
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.Password || !formData.RePassword) {
            alert('la contraseña es obligatoria');
            return;
        }
        if(formData.Password !== formData.RePassword){
            alert('la contraseña no coincide');
            return;
        }

        ChangePassword(formData.Password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='Change Password' backUrl="/"></AppBarComponent>
            <FormControl sx={{ width: '70%', mx: 'auto' }}>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl sx={{ width: '70%', mx: 'auto', mt: 3 }}>
                <FormLabel>Repeat Password</FormLabel>
                <Input
                    type="password"
                    name="RePassword"
                    value={formData.RePassword}
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
                >
                    Save
                </Button>
            </Box>
        </form>
    );
}

export default ChangePasswordComponent;