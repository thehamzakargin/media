import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandAblePanel from "./ExpandAblePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItems({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };
    const header = (
        <>
        <Button className="mr-2" loading={result.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan/>
        </Button>
        {album.title}
        </>
    );

            return (
            <ExpandAblePanel key={album.id} header={header}>
                <PhotosList album={album}/>
            </ExpandAblePanel>
            );
}

export default AlbumListItems;