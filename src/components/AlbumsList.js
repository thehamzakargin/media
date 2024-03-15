import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItems from "./AlbumsListItems";


//dev onlyy
//const pause = (duration) => {
//    return new Promise((resolve) => {
//        setTimeout(resolve, duration);
//    });
//};

function AlbumList({ user }) {
    const { data, error, isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };



    let content;
    if(isFetching)  {
        content = <Skeleton className="h-10 w-full" times={3}/>
    }else if (error) {
        content = <div> error loading albums.</div>
    }else {
        content = data.map(album => {
            return <AlbumListItems key={album.id} album={album}/>;
        });
    }

    //console.log(data, error, isLoading)

    return (
    <div>
        <div className="m-2 flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>        
            <Button loading={results.isLoading} onClick={handleAddAlbum}>+ add album</Button>
        </div>        
        <div>{content}</div>
    </div>
    )
};

export default AlbumList;