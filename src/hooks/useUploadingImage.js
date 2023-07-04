import { useEffect } from 'react';

const useUploadingImage = (imgFile) => {

    useEffect(() => {

        if (imgFile) {
            const formData = new FormData()

            formData.append("image", imgFile);

            fetch(`https://api.imgbb.com/1/upload?key=32373295ed5043f07ad05f68f15007ab`, {
                method: "POST",
                body: formData
            }).then(res => res.json())
                .then((imgData) => {
                    console.log(imgData);
                });
        }

    }, [imgFile]);

};

export default useUploadingImage;