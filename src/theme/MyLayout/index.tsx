import type { Props } from '@theme/Layout';
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from './styles.module.scss';

const MyLayout = ({
  children,
  maxWidth,
  ...layoutProps
}: Props & { maxWidth?: number }) => {

  return (
    <Layout {...layoutProps}>
      <div className={styles.containerWrapper}>
        <div
          className={clsx(styles.myContainer, 'margin-vert--lg')}
          style={maxWidth ? { maxWidth: `${maxWidth}px` } : {}}
        >
          <main>{children}</main>
        </div>
      </div>
    </Layout>
  )
}

export default MyLayout;