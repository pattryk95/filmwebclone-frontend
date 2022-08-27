import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Ratings(props: ratingsProps)
{
    const [maximumValueArr, setMaximumValueArr] = useState<number[]>([]);

    useEffect(() =>
    {
        setMaximumValueArr(Array(props.maximumValue).fill(0));
    }, [props.maximumValue])


    return (
        <>
            {maximumValueArr.map((_, index) => <FontAwesomeIcon
                icon="star"
                key={index}
                className={`fa-lg pointer`}
            />)}
        </>
    )
}

interface ratingsProps
{
    maximumValue: number;
    selectedValue: number;
    onChange(rate: number): void;
}