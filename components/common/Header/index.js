import useNeedAuth from "~/hooks/useNeedAuth";
import styles from "./styles.module.scss";

export default function Header() {
  const needAuth = useNeedAuth();
  console.log({ needAuth })
  return <header className={styles['header']}>{needAuth ? 'need' : 'no-need'}</header>;
}
