const { ContentType, FieldType } = require('@include/hearth');

const carouselImages = new ContentType({
  name: 'community-carousel-images',
  singularDisplayName: 'Community Partners Carousel Image',
  pluralDisplayName: 'Community Partners Carousel Images',
});

carouselImages
  .createField({
    name: 'image',
    displayName: 'Image (ONLY ONE)',
    type: FieldType.MEDIA,
    required: true,
  })
  .createField({
    name: 'image_alt_text',
    displayName: 'Alternate Text for the Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = carouselImages;
