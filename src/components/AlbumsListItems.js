import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandAblePanel from "./ExpandAblePanel";
import { useRemoveAlbumMutation } from "../store";

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
                list of photos in the album
            </ExpandAblePanel>
            );
}

export default AlbumListItems;