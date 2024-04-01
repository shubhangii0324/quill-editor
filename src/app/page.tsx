import AppLayout from "@/components/AppLayout";
import CodeEditor from "@/components/CodeEditor";
import { FC } from "react";
import "./globals.css";

interface IProps {
	pageProps: any;
}

const Home: FC<IProps> = (props) => {
  const { pageProps } = props;

  return (
    <main>
      <AppLayout Component={() => <CodeEditor />} pageProps={pageProps} />
    </main>
  );
}

export default Home;
