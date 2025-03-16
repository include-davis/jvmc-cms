const { ContentType, FieldType } = require('@include/hearth');

const general = new ContentType({
  name: 'general-info',
  singularDisplayName: 'General Information',
});

general
  .createField({
    name: 'tagline',
    displayName: 'Home Page Tagline',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'address',
    displayName: 'Address',
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
    displayName: 'Contact Page Appointment Instruction',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'volunteer_page_description',
    displayName: 'Volunteer Page Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'volunteer_image',
    displayName: 'Volunteer Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'volunteer_image_alt_text',
    displayName: 'Alternate Text for the Volunteer Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_card_title',
    displayName: 'Event Card Title (About Us Page)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_card_description',
    displayName: 'Event Card Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'event_card_image',
    displayName: 'Event Card Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'event_card_image_alt_text',
    displayName: 'Alternate Text for the Event Card Image Above',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_card_button_text',
    displayName: 'Event Card Button Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_card_button_url',
    displayName: 'Event Card Button URL Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = general;
