const { ContentType, FieldType } = require('@include/hearth');

const cards = new ContentType({
  name: 'homepage-carousel-cards',
  singularDisplayName: 'Homepage Carousel Card',
  pluralDisplayName: 'Homepage Carousel Cards',
});

cards
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'image_alt_text',
    displayName: 'Alternate Text for the Image Above',
    type: FieldType.SHORT_TEXT,
    required: true
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'hours',
    displayName: 'Hours',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'appointment_instruction',
    displayName: 'Appointment Instruction',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'button_text_and_link',
    displayName: 'Button Text and Link (Separate by Comma)',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = cards;
