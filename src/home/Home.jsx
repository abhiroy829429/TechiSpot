import React from 'react'
import NavBar from '../component/NavBar';
import styles from './Home.module.css';
import SideBar from '../component/SideBar';
import Post from '../component/Post';
import Team from '../component/Team';
export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.homepage}>
        <SideBar/>
        <Post/>
        <Team/>
      </div>
    </>
  )
}
