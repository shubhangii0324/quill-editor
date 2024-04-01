import AppLayout from "@/components/AppLayout";
import CodeEditor from "@/components/CodeEditor";
import "./globals.css";

const Home = () => {

  return (
    <main>
      <AppLayout Component={() => <CodeEditor />} />
    </main>
  );
}

export default Home;
