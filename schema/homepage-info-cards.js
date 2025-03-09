const { ContentType, FieldType } = require('@include/hearth');

const homepageInfoCards = new ContentType({
  name: 'homepage-info-cards',
  singularDisplayName: 'Home Page Info Card',
  pluralDisplayName: 'Home Page Info Cards',
});

homepageInfoCards
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'image',
    displayName: 'Card Image (ONLY ONE)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'image_alt_text',
    displayName: 'Alternate Text for the Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'icon',
    displayName: 'Card Icon (Paste SVG code here)',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = homepageInfoCards;
