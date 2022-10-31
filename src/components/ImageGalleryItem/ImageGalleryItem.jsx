export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image;
  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
