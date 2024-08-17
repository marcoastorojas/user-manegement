import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ItemSection from './ItemSection';
import User from '../../Entities/User';

const style = {
    p: 0,
    width: '90%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    mx: 'auto',
    mt: 1,
    mb: 3
};

export default function Sections({ user }: { user: User }) {
    const { Name, UserName, Email, PhoneNumber } = user;
    return (
        <>
            <List sx={style} aria-label="mailbox folders">
                <ItemSection title='Name' value={Name} url='/name'></ItemSection>
                <Divider component="li" />
                <ItemSection title='UserName' value={UserName} url='/username'></ItemSection>
                <Divider component="li" />
                <ItemSection title='Email' value={Email}></ItemSection>
                <Divider component="li" />
                <ItemSection title='Phone Number' value={PhoneNumber}></ItemSection>
                <Divider component="li" />
                <ItemSection title='Change Password' url='password'></ItemSection>
            </List>

            <List sx={style} aria-label="mailbox folders">
                <ItemSection title='Delete my Account and Data'></ItemSection>
                <Divider component="li" />
            </List>

            <List sx={style} aria-label="mailbox folders">
                <ItemSection title='notifications'></ItemSection>

            </List>

        </>
    );
}