import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-1.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-2.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-3.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-4.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-5.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-6.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-7.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-8.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <img
          src="/gallery/gallery-9.jpg"
          alt="photo of arranged destinations"
          loading="lazy"
        />
      </figure>
    </div>
  );
}

export default Gallery;
