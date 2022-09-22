import type { NextPage } from "next";
import { BaseLayout, DesktopLayout } from "../components/layout";
import Desktop from "../components/Views/Desktop";
import Main from "../components/Views/Main";
import { useWindowSize } from "../utils";

const Home: NextPage = () => {
  const size = useWindowSize();
  return (
    <>
      {size.width > 425 ? (
        <DesktopLayout>
          <Desktop />
        </DesktopLayout>
      ) : (
        <BaseLayout>
          <Main />
        </BaseLayout>
      )}
    </>
  );
};

export default Home;
