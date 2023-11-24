import { PropsWithChildren } from "react"
import styles from "./main-layout.module.css"

type MainLayoutProps = PropsWithChildren

export function MainLayout(props: MainLayoutProps) {
  return <div className={styles.container}>{props.children}</div>
}
