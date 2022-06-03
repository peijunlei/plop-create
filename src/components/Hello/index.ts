import { FC } from "react"

import styles from "./index.module.css"

interface HelloProps {}

const Hello: FC<HelloProps> = () => {
    return (
        <div className={ styles.hello }>
            Hello
        </div>
    )
}

export default Hello