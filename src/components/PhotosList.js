import { useFetchPhotoQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import PhotosListItems from "./PhotosListItems";
import Skeleton from "./Skeleton";


function PhotosList({album}) {
    const {data, isFetching, error} = useFetchPhotoQuery({ album });
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();
    const handleAddPhoto = () => {
        addPhoto(album);
    };
    let content;
    if(isFetching){
        content = <Skeleton className="h-8 w-8" times={4}/>
    }else if(error){
        content = <div>error fething photo</div>
    }else{
        content = data.map(photo => {
            return <PhotosListItems key={photo.id} photo={photo}/>
        });
    }


    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in album {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >
                    + add photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row justify-center flex-wrap">
                {content}
            </div>
        </div>
    )
};

export default PhotosList;