import AppBarComponent from "../../../Shared/Components/AppBar"
import Sections from "./Sections"
import { UserStore, UserStoreState } from "../../UserStore"
import User from "../../Entities/User"


function ProfileComponent() {
    var user: User | undefined = UserStore((state:UserStoreState) => state.user)

    return (
        <>
            {
                user?
                <>
                    <AppBarComponent title='Profile Settings'></AppBarComponent>
                    <Sections user= {user}></Sections>
                </>
                : <h2>espera</h2>
            }
        </>
    )
}

export default ProfileComponent