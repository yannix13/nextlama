import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sitLorem ipsum dolor sit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            in magni! Autem voluptatem assumenda, 
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            in magni! Autem voluptatem assumenda, 
            cumque iure molestiae ducimus? Magnam officiis vitae omnis ab maxime illum necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            in magni! Autem voluptatem assumenda, 
            cumque iure molestiae ducimus? Magnam officiis vitae omnis ab maxime illum necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            in magni! Autem voluptatem assumenda, 
            cumque iure molestiae ducimus? Magnam officiis vitae omnis ab maxime illum necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam a voluptatum quaerat 
            in magni! Autem voluptatem assumenda, 
            cumque iure molestiae ducimus? Magnam officiis vitae omnis ab maxime illum necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;