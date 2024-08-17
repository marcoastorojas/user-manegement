import { create } from 'zustand'
import User from './Entities/User'
import { HttpProxy } from '../helpers/HttpProxy'
import UserDto from './Entities/UserDto'

export interface UserStoreState
{
    user?: User;
    getPrincipalUser(): Promise<void>;
    ChangeUserName: (userName: string) => Promise<void>;
    ChangeName: (firstName: string, lastName:string) => Promise<void>;
    ChangePassword : (userName: string) => Promise<void>
}


export const UserStore = create<UserStoreState>((set) => 
({
    user: new User("primer nombre", "apellido","userName","123123123","email","987987978"),
    getPrincipalUser: async() => {
        var user2 = new User("nombre user2", "apellido user2","userName","123123123","email","987987978")
        // var principalUser = await HttpProxy.Get<UserDto>("http://localhost:8080");
         set((state:UserStoreState) => ({ ...state, user:user2 }))
    },
    ChangeUserName: async (userName: string) =>  {
        // await HttpProxy.Update("http://localhost:8080/userName",{ userName });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.chageUserName(userName);
            return { ...state, user:currentUser }
        })
    },
    ChangeName: async (firstName: string, lastName: string) =>  {
        // await HttpProxy.Update("http://localhost:8080/name",{ firstName, lastName });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.changeFirstName(firstName);
            currentUser?.changeLastName(lastName);
            return { ...state, user:currentUser }
        })
    },
    ChangePassword: async (password: string) =>  {
        // await HttpProxy.Update("http://localhost:8080/password",{ password });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.changePassword(password);
            return { ...state, user:currentUser }
        })
    }
}))
