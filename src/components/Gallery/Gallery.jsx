import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-1.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-2.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-3.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-4.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-5.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-6.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-7.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-8.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/public/gallery/gallery-9.jpg"
          alt="photo of arranged destinations"
        />
      </figure>
    </div>
  );
}

export default Gallery;
