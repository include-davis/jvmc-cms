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
    displayName: 'Icon (Paste SVG code here)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'button',
    displayName: 'Button (Text for button)',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = volunteerCards;
