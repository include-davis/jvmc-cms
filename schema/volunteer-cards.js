const { ContentType, FieldType } = require('@include/hearth');

const volunteerCards = new ContentType({
  name: 'volunteer-cards',
  singularDisplayName: 'Volunteer Card',
  pluralDisplayName: 'Volunteer Cards',
});

volunteerCards
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
    name: 'image-alt-text',
    displayName: 'Alternate Text for the Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'icon',
    displayName: 'Icon (ONLY ONE)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'icon-alt-text',
    displayName: 'Alternate Text for the Icon Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'button',
    displayName: 'Button (Text for button)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'button-url',
    displayName: 'Button URL Link',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = volunteerCards;
