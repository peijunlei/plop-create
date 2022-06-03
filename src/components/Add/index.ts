import { FC } from "react"

import styles from "./index.module.css"

interface AddProps {}

const Add: FC<AddProps> = () => {
    return (
        <div className={ styles.add }>
            Add
        </div>
    )
}

export default Add