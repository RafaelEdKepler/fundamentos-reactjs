import { Header } from "./components/Header";
import {Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Rafael Eduardo Kepler"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laboriosam vitae accusantium ipsum suscipit quibusdam in iusto officia maiores culpa, atque ut perferendis blanditiis provident error sed neque commodi placeat!"
          />
          <Post
            author="Thaysa Kaestner Kopsch"
            content="Linda maravilhosa"
          />
        </main>
      </div>
    </>
  )
}

export {App}
