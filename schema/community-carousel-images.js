const { ContentType, FieldType } = require('@include/hearth');

const carouselImages = new ContentType({
  name: 'community-carousel-images',
  singularDisplayName: 'Community Partners Carousel Image (HAVE AT LEAST 4)',
  pluralDisplayName: 'Community Partners Carousel Images (HAVE AT LEAST 4)',
});

carouselImages
  .createField({
    name: 'image',
    displayName: 'Image (ONLY ONE)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'image_alt_text',
    displayName: 'Alternate Text for the Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = carouselImages;
