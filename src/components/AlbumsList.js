import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandAblePanel from "./ExpandAblePanel";
import Button from "./Button";

//dev onlyy
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

function AlbumList({ user }) {
    const { data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };



    let content;
    if(isLoading)  {
        content = <Skeleton className="h-100 w-full" times={3}/>
    }else if (error) {
        content = <div> error loading albums.</div>
    }else {
        content = data.map(album => {
            const header = <div>{album.title}</div>;

            return <ExpandAblePanel key={album.id} header={header}>
                list of photos in the album
            </ExpandAblePanel>

        });
    }

    //console.log(data, error, isLoading)

    return (
    <div>
        <div className="m-2 flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>        
            <Button loading={isLoading} onClick={handleAddAlbum}>+ add album</Button>
        </div>        
        <div>{content}</div>
    </div>
    )
};

export default AlbumList;