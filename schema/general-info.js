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
    displayName: 'Appointment Instruction',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'volunteer_page_description',
    displayName: 'Volunteer Page Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'volunteer_image',
    displayName: 'Volunteer Image',
    type: FieldType.MEDIA_LIST,
    required: false,
  });

module.exports = general;
