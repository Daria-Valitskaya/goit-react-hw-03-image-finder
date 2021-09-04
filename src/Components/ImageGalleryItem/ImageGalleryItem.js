import PropTypes from "prop-types";

export default function ImageGalleryItem({ image, onOpenModal }) {
  const { id, webformatURL, tags, largeImageURL } = image;
  return (
    <li className="ImageGalleryItem" key={id} onClick={onOpenModal}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        data-url={largeImageURL}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
