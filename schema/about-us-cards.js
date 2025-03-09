const { ContentType, FieldType } = require('@include/hearth');

const aboutUsCards = new ContentType({
  name: 'about-us-cards',
  singularDisplayName: 'About Us Card',
  pluralDisplayName: 'About Us Cards',
});

aboutUsCards
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
  });

module.exports = aboutUsCards;
