export var userRoles = {
  admin: 'admin',
  recipient: 'recipient',
  volonteer: 'volunteer',
};

// export var userRole;
export var userRole = userRoles.admin;
export var isRoot = true;
export var isAdmin = userRole === userRoles.admin;
export var adminPermissions = [
  'CONFIRM_USER',
  'CREATE_TASK',
  'GIVE_KEY',
  'RESOLVE_CONFLICT',
  'EDIT_BLOG',
  'SET_CATEGORY_POINTS',
];

export const mockVolunteers = [
  {
    id: '11111114',
    title: 'Джеки Чан',
  },
  {
    id: '11111115',
    title: 'Брюс Уиллис',
  },
  {
    id: '11111116',
    title: 'Боб Марлей',
  },
];

export const mockRecipients = [
  {
    id: '22222224',
    title: 'Вася Пупкин',
  },
  {
    id: '22222225',
    title: 'Серёжа Кузькин',
  },
  {
    id: '22222226',
    title: 'Андрей Тузиков',
  },
];

export const mockApplications = [
  {
    id: 'as234oljk23',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
    volunteerId: '11111114',
    recipientId: '22222224',
  },
  {
    id: 'oi234lhk5fdg',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
    volunteerId: '11111114',
    recipientId: '22222224',
  },
  {
    id: 'lj345lkj92fd',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111114',
    recipientId: '22222225',
  },
  {
    id: 'sertsh',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111115',
    recipientId: '22222225',
  },
  {
    id: 'hfusxdfgset',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111115',
    recipientId: '22222226',
  },
  {
    id: '4357rsthry',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111115',
    recipientId: '22222226',
  },
  {
    id: 'sdyueu3535',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111116',
    recipientId: '22222224',
  },
  {
    id: 'wrty34553',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    volunteerId: '11111116',
    recipientId: '22222225',
  },
  {
    id: '789sdfgrtw3',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
    volunteerId: '11111116',
    recipientId: '22222226',
  },
];
