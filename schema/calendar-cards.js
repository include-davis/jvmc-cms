const { ContentType, FieldType } = require('@include/hearth');

const cards = new ContentType({
  name: 'calendar-cards',
  singularDisplayName: 'Calendar Card',
  pluralDisplayName: 'Calendar Cards',
});

cards
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
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
    name: 'action_text',
    displayName: 'Action Text',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'action_button_text_and_link',
    displayName: 'Action Button Text and Link (Separate by Comma)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'hex_code',
    displayName: 'Color Hex Code for Calendar',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = cards;
