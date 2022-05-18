import React, { FC } from "react";
import { Image } from "../Image"
import { IProps } from "./IProps"
import "./styles.css";

export const Gallery: FC<IProps> = ({ images, readOnly, addImage }): JSX.Element => {
    return (
        <div>
            <h3>Gallery</h3>
            <div className="gallery" >
                {
                    images.map((image): JSX.Element => {
                        const src = readOnly ? `http://localhost:4000/uploads/${image}` : URL.createObjectURL(image as Blob);

                        return (
                            <Image src={src}  />
                        )
                    })
                }
                {
                    !readOnly && <input type="file" name="file-image" id="" onChange={addImage} />
                }
            </div>
        </div>
    )
}