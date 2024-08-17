import { create } from 'zustand'
import User from './Entities/User'
import { HttpProxy } from '../helpers/HttpProxy'
import {UserDto, UserMapper} from './Entities/UserDto'

export interface UserStoreState
{
    user?: User;
    getPrincipalUser(): Promise<void>;
    ChangeUserName: (userName: string) => Promise<void>;
    ChangeName: (firstName: string, lastName:string) => Promise<void>;
    ChangePassword : (current:string, password: string) => Promise<void>
}

export interface ResposeErrorApi
{
    messageError:string;
}

export const UserStore = create<UserStoreState>((set) => 
({
    user: undefined,
    getPrincipalUser: async() => {
        var principalUser = await HttpProxy.Get<UserDto>("http://localhost:8080/api/user");
        set((state:UserStoreState) => ({ ...state, user:UserMapper.toUser(principalUser) }))
    },
    ChangeUserName: async (userName: string) =>  {
        await HttpProxy.Update("http://localhost:8080/api/user/userName",{ userName });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.chageUserName(userName);
            return { ...state, user:currentUser }
        })
    },
    ChangeName: async (firstName: string, lastName: string) =>  {
        await HttpProxy.Update("http://localhost:8080/api/user/name",{ firstName, lastName });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.changeFirstName(firstName);
            currentUser?.changeLastName(lastName);
            return { ...state, user:currentUser }
        })
    },
    ChangePassword: async (current:string, password: string) =>  {
         await HttpProxy.Update("http://localhost:8080/api/user/password",{ current, password });
        set((state:UserStoreState) => {
            var currentUser = state.user;
            currentUser?.changePassword(password);
            return { ...state, user:currentUser }
        })
        
    }
}))
