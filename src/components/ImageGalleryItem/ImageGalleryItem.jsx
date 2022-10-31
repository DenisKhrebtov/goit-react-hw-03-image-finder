export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
