import { useState } from 'react';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { UserStore, UserStoreState } from '../../UserStore';
import User from '../../Entities/User';
import { useNavigate } from 'react-router-dom';
import { useSnackbar, VariantType } from 'notistack';
import { SaveButton } from '../../../Shared/Components/SaveButton';
import { InputLabelComponent } from '../../../Shared/Components/InputLabel';

function ChangeUserNameComponent() {
    var user: User | undefined = UserStore((state:UserStoreState) => state.user)
    const ChangeUserName = UserStore(state => state.ChangeUserName);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    const [formData, setFormData] = useState({ UserName: user?.UserName});
    

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateUserName = (): boolean => {
        if (!formData.UserName) {
            alert('El username es obligatorio');
            showSnackbar("El username es obligatorio", "warning");
            return false;
        }
        return true;
    };

    const showSnackbar = (message: string, variant: VariantType): void => {
        enqueueSnackbar(message, { autoHideDuration: 2000, anchorOrigin: { horizontal: "right", vertical: "top" }, variant });
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();

        if (validateUserName()) { 

            await ChangeUserName(formData.UserName!);
            showSnackbar("Operacion Exitosa", "success");
            navigate("/")
         }
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='UserName' backUrl="/"></AppBarComponent>
            <InputLabelComponent
                label="User Name"
                name="UserName"
                value={formData.UserName!}
                onChange={handleInputChange}
            />
            <SaveButton></SaveButton>
        </form>
    );
}

export default ChangeUserNameComponent;