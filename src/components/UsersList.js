import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";


function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    };

    let content;
    if(isLoadingUsers){
        content = <Skeleton times={7} className="h-10 w-full"/>
    }else if(loadingUsersError){
        content = <div>error! data is fetcchinggg..</div>
    }else {
        content = data.map((user) => {
            return (
                <UsersListItem key={user.id} user={user} />
            );          
        });
        };
    return (
        <div>
            <div className="flex flex-row justify-between  m-3">
                <h1 className="m-2 text-xl">Users</h1>
                    <Button onClick={handleUserAdd} loading={isCreatingUser}>
                    + add User
                    </Button>
                    {creatingUserError && 'error creating user.....'}
                </div>
            {content}
        </div>
    );
}   



export default UsersList;